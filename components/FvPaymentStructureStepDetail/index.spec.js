import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvPaymentStructureStepDetail from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const $activeAccount = {
  headers: jest.fn()
}
const $router = {
  push: jest.fn()
}
const $route = {
  path: 'paymentConditions/new'
}
const factory = (propsData) => {
  return shallowMount(FvPaymentStructureStepDetail, {
    localVue,
    store,
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg,
      $activeAccount,
      $router,
      $route
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      paymentConditions: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          findById: () => jest.fn()
        }
      }
    }
  })
})

describe('FvPaymentStructureStepDetail', () => {
  it('should render a fv payment structure step detail', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="labelField"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
    expect(
      wrapper.find('[data-testid="addNewPaymentConditionButton"]').exists()
    ).toBe(true)
    expect(wrapper.find('[data-testid="table"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="error"]').exists()).toBe(false)
  })
  it('should display payment condition table if there is payment conditions', () => {
    const payload = {
      paymentConditions: ['foo', 'bar']
    }
    const wrapper = factory({ payload })
    expect(wrapper.find('[data-testid="table"]').exists()).toBe(true)
  })
  it('should display an error if the total is not 100 and there is payment conditions', () => {
    const payload = {
      paymentConditions: [
        {
          portion: 20
        },
        {
          portion: 40
        }
      ]
    }
    const wrapper = factory({ payload })
    expect(wrapper.find('[data-testid="error"]').exists()).toBe(true)
  })
  it('should have a global risk of 0 if there is no payment conditions', () => {
    const wrapper = factory()
    expect(wrapper.vm.globalRisk).toBe(0)
  })
  it('should emit an event when label changed', () => {
    const wrapper = factory()
    const labelField = wrapper.find('[data-testid="labelField"]')
    const label = 'label'
    labelField.vm.$emit('input', label)
    const payloadChangedCalls = wrapper.emitted('payload:changed')
    expect(payloadChangedCalls).toBeTruthy()
    expect(payloadChangedCalls).toHaveLength(1)
    const expectedPayload = {
      label
    }
    expect(payloadChangedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should push to new payment condition form when the new payment condition button is clicked', () => {
    const wrapper = factory()
    const addNewPaymentConditionButton = wrapper.find(
      '[data-testid="addNewPaymentConditionButton"]'
    )
    addNewPaymentConditionButton.vm.$emit('button:click')
    expect(addNewPaymentConditionButton.vm.$route.path).toBe($route.path)
  })
})
