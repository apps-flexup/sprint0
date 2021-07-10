import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvPaymentConditionRisk from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const settings = {
  theme: 'light'
}

const value = {
  r1: {
    key: 'base',
    value: 40
  },
  r2: {
    key: 'endOfDeliveryMonth',
    value: 50
  }
}

const factory = (propsData) => {
  return shallowMount(FvPaymentConditionRisk, {
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

describe('FvPaymentConditionRisk', () => {
  it('should render a fv payment condition risk', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="total"]').exists()).toBe(true)
  })
  it('should have a total risk of 0 if there is no selected references', () => {
    const wrapper = factory()
    expect(wrapper.vm.total).toBe(0)
  })
  it('should have a total risk of 20 with defined references', () => {
    const wrapper = factory({ value })
    expect(wrapper.vm.total).toBe(20)
  })
})
