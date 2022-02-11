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
          headers: jest.fn(),
          products: jest.fn(),
        },
        $displayRules: {
          status: jest.fn(),
        },
      },
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        products: {
          namespaced: true,
          actions: {
            get: jest.fn(),
          },
        },
      },
    })
  })
  it('should render a fv third party account list', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="table"]').exists()).toBeTruthy()
  })
  it('should emit an event when third party account is selected', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    table.vm.$emit('list:selected')
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
})
