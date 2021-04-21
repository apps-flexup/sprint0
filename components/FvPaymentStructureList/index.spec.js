import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvPaymentStructureList from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const $displayRules = {
  paymentStructureRisk: jest.fn()
}

const removeFn = jest.fn()

const factory = () => {
  return shallowMount(FvPaymentStructureList, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $displayRules
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      paymentStructures: {
        namespaced: true,
        actions: {
          get: jest.fn(),
          remove: removeFn
        }
      }
    }
  })
})

describe('FvPaymentStructureList', () => {
  it('should render a fv payment structure list', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="table"]').exists()).toBe(true)
  })
  it('should emit an event when payment structure is selected', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    const paymentStructure = {
      id: 45
    }
    table.vm.$emit('list:selected', paymentStructure)
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toEqual(paymentStructure)
  })
  it('should dispatch remove payment structure when table emit delete', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    const paymentStructure = {
      foo: 'foo'
    }
    table.vm.$emit('list:delete', paymentStructure)
    expect(removeFn).toHaveBeenCalledTimes(1)
  })
})
