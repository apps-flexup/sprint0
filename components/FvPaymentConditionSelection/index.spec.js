import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvPaymentConditionSelection from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const payload = [
  {
    id: 3,
    portion: 50
  },
  {
    id: 2,
    portion: 50
  }
]

const $activeAccount = {
  headers: () => []
}

const factory = (propsData) => {
  return shallowMount(FvPaymentConditionSelection, {
    localVue,
    store,
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg,
      $activeAccount
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
          findById: () => () => {
            return { risk: 20, portion: 50 }
          }
        }
      }
    }
  })
})

describe('FvPaymentConditionSelection', () => {
  it('should render a fv payment condition step detail', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="table"]').exists()).toBe(false)
  })
  it('should display table if there is payment conditions', () => {
    const wrapper = factory({ value: payload })
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="table"]').exists()).toBe(true)
  })
  it('should have a total risk of 0 if there is no selected payment condition', () => {
    const wrapper = factory()
    expect(wrapper.vm.globalRisk).toBe(0)
  })
  it('should have a total risk of 20 with defined payment conditions', () => {
    const wrapper = factory({ value: payload })
    expect(wrapper.vm.globalRisk).toBe(20)
  })
})
