import { createLocalVue, shallowMount } from '@vue/test-utils'
// import AsyncComputed from 'vue-async-computed'
import Vuex from 'vuex'
import FvOrderTotals from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
// localVue.use(AsyncComputed)

let store

const settings = {
  currency: 'EUR'
}

const $activeAccount = {
  settings: () => settings
}

const orderLines = [
  {
    vat: 10,
    price: 12,
    quantity: 5
  },
  {
    vat: 10,
    price: 5,
    quantity: 10
  },
  {
    vat: 25,
    price: 18,
    quantity: 1
  }
]

const factory = () => {
  return shallowMount(FvOrderTotals, {
    localVue,
    store,
    propsData: {
      orderLines
    },
    mocks: {
      $t: (msg) => msg,
      $activeAccount
    }
  })
}

beforeEach(() => {
  // eslint-disable-next-line import/no-named-as-default-member
  store = new Vuex.Store({
    modules: {
      accounts: {
        namespaced: true,
        actions: {
          get: jest.fn()
        }
      },
      settings: {
        namespaced: true,
        actions: {
          getSettings: jest.fn()
        }
      }
    }
  })
})

describe('FvOrderTotals', () => {
  it('should render a fv order totals', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="totalWithoutVat"]').exists()).toBeTruthy()
    // expect(wrapper.find('[data-testid="totalByVat"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="total"]').exists()).toBeTruthy()
  })
})
