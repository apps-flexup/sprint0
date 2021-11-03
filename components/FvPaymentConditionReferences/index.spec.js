import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvPaymentConditionReferences from './index.vue'

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

const factory = (propsData) => {
  return shallowMount(FvPaymentConditionReferences, {
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

describe('FvPaymentConditionReferences', () => {
  it('should render a fv payment condition references', () => {
    const wrapper = factory()
    expect(wrapper.findAll('[data-testid="referenceField"]').length).toBe(
      references.length
    )
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
      r1: value
    }
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
})
