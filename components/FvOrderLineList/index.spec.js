import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvOrderLineList from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const $activeAccount = {
  headersOrderLines: jest.fn()
}

const factory = () => {
  return shallowMount(FvOrderLineList, {
    localVue,
    store,
    mocks: {
      $activeAccount
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      headers: {
        namespaced: true,
        actions: {
          getOrderLineHeaders: jest.fn()
        }
      },
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

describe('FvOrderLineList', () => {
  it('should render a fv order line list', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="dataTable"]').exists()).toBeTruthy()
  })
})
