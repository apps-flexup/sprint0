import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvProductList from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvProductList', () => {
  let store

  const factory = () => {
    return shallowMount(FvProductList, {
      localVue,
      store,
      mocks: {
        $t: (msg) => msg,
        $activeAccount: {
          headersProducts: jest.fn(),
          products: jest.fn()
        },
        $dataTable: {
          filter: jest.fn(),
          sortByKey: jest.fn()
        }
      }
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        headers: {
          namespaced: true,
          actions: {
            getProductHeaders: jest.fn()
          }
        },
        products: {
          namespaced: true,
          actions: {
            get: jest.fn()
          }
        }
      }
    })
  })
  it('should render a fv third party account list', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="header"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="dataTable"]').exists()).toBe(true)
  })
  it('should emit an event when third party account is selected', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    dataTable.vm.$emit('dataTable:selected')
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
})
