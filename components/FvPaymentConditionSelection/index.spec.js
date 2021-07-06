import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvPaymentConditionStepDetail from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const settings = {
  theme: 'light'
}

const references = [
  {
    key: 'r1',
    value: [
      {
        key: 'base',
        value: 40
      },
      {
        key: 'flex',
        value: 60
      },
      {
        key: 'superFlex',
        value: 80
      },
      {
        key: 'equity',
        value: 100
      }
    ]
  },
  {
    key: 'r2',
    value: [
      {
        key: 'equity',
        value: 100
      },
      {
        key: 'beforeDeliveryDate',
        value: 40
      },
      {
        key: 'beginningOfDeliveryMonth',
        value: 45
      },
      {
        key: 'endOfDeliveryMonth',
        value: 50
      },
      {
        key: 'later',
        params: {
          key: 'fv-payment-term-params'
        }
      }
    ]
  }
]

const payload = {
  label: 'Base simple',
  references: {
    r1: {
      key: 'base',
      value: 40
    },
    r2: {
      key: 'endOfDeliveryMonth',
      value: 50
    }
  },
  risk: 20,
  account_id: 1,
  id: 3
}

const factory = (propsData) => {
  return shallowMount(FvPaymentConditionStepDetail, {
    localVue,
    store,
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      references: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          all: () => references
        }
      },
      settings: {
        namespaced: true,
        actions: {
          getSettings: jest.fn()
        },
        getters: {
          settings: () => settings
        }
      }
    }
  })
})

describe('FvPaymentConditionStepDetail', () => {
  it('should render a fv payment condition step detail', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="labelField"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-testid="referenceField"]').length).toBe(
      references.length
    )
  })
  it('should emit an event when label change', () => {
    const wrapper = factory()
    const labelField = wrapper.find('[data-testid="labelField"]')
    const label = 'foo'
    labelField.vm.$emit('input', label)
    const payloadChangedCalls = wrapper.emitted('payload:changed')
    expect(payloadChangedCalls).toBeTruthy()
    expect(payloadChangedCalls).toHaveLength(1)
    const expectedPayload = {
      label
    }
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should have a total risk of 0 if there is no selected references', () => {
    const wrapper = factory()
    expect(wrapper.vm.total).toBe(0)
  })
  it('should have a total risk of 20 with defined references', () => {
    const wrapper = factory({ payload })
    expect(wrapper.vm.total).toBe(20)
  })
  it('should emit an event when a reference is selected', () => {
    const wrapper = factory()
    const referenceField = wrapper.find('[data-testid="referenceField"]')
    const reference = references[0]
    const value = references[0].value[0]
    referenceField.vm.$emit('reference:selected', value, reference)
    const payloadChangedCalls = wrapper.emitted('payload:changed')
    expect(payloadChangedCalls).toBeTruthy()
    expect(payloadChangedCalls).toHaveLength(1)
    const expectedPayload = {
      references: {
        r1: value
      },
      risk: 0
    }
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
})
