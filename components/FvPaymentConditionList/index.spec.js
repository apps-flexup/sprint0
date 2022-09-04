import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvPaymentConditionList from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const $displayRules = {
  paymentConditionRisk: jest.fn(),
  paymentConditionPriority: jest.fn(),
  paymentConditionPaymentTerm: jest.fn(),
  paymentConditionInterestRate: jest.fn()
}

const factory = () => {
  return shallowMount(FvPaymentConditionList, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $displayRules
    }
  })
}

const removeFn = jest.fn()

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      paymentConditions: {
        namespaced: true,
        actions: {
          get: jest.fn(),
          remove: removeFn
        }
      }
    }
  })
})

describe('FvPaymentConditionList', () => {
  it('should render a fv payment condition list', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="table"]').exists()).toBeTruthy()
  })
  it('should emit an event when payment condition is selected', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    const paymentCondition = {
      foo: 'foo'
    }
    table.vm.$emit('list:selected', paymentCondition)
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toEqual(paymentCondition)
  })
  it('should dispatch remove payment condition when table emit delete', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    const paymentCondition = {
      foo: 'foo'
    }
    table.vm.$emit('list:delete', paymentCondition)
    expect(removeFn).toHaveBeenCalledTimes(1)
  })
})
