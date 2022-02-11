import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvOrderDetails from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const $displayRules = {
  localeDate: jest.fn(),
  paymentStructure: jest.fn(),
}

const settings = {
  currency: 'EUR',
}

describe('FvOrderDetails', () => {
  const factory = (propsData) => {
    return shallowMount(FvOrderDetails, {
      localVue,
      store,
      propsData: {
        ...propsData,
      },
      mocks: {
        $t: (msg) => msg,
        $displayRules,
      },
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        settings: {
          namespaced: true,
          getters: {
            settings: () => settings,
          },
        },
      },
    })
  })
  it('should render a fv order details', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="thirdPartyAccount"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="date"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="paymentStructure"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="orderLines"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="total"]').exists()).toBeTruthy()
  })
  it('should init third party account id with order', () => {
    const order = {
      third_party_account_id: 1,
    }
    const wrapper = factory({ order })
    expect(wrapper.vm.thirdPartyAccountId).toBe(order.third_party_account_id)
  })
  it('should init structure with order payment structure label', () => {
    const order = {
      structure: {
        label: 'foo',
      },
    }
    const wrapper = factory({ order })
    expect(wrapper.vm.structure).toBe(order.structure.label)
  })
  it('should init date with order date', () => {
    const order = {
      date: '01/01/1971',
    }
    const wrapper = factory({ order })
    expect(wrapper.vm.orderDate).toBe(order.date)
  })
  it('should init order lines with order lines', () => {
    const order = {
      order_lines: [0, 1, 2],
    }
    const wrapper = factory({ order })
    expect(wrapper.vm.orderLines).toEqual(order.order_lines)
  })
  it('should clear order when call clear order', () => {
    const order = {
      third_party_account_id: 1,
      structure: {
        label: 'foo',
      },
      date: '01/01/1971',
      order_lines: [0, 1, 2],
    }
    const wrapper = factory({ order })
    wrapper.vm.clearOrder()
    expect(wrapper.vm.thirdPartyAccountId).toBe(null)
    expect(wrapper.vm.structure).toBe(null)
    expect(wrapper.vm.orderDate).toBe(null)
    expect(wrapper.vm.orderLines).toEqual([])
  })
})
