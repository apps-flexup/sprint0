import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvProductAutocomplete from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const $activeAccount = {
  products: () => ['1', '2', '3']
}

const factory = () => {
  return shallowMount(FvProductAutocomplete, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $activeAccount
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      products: {
        namespaced: true,
        actions: {
          get: jest.fn()
        }
      }
    }
  })
})

describe('FvProductAutocomplete', () => {
  it('should render a fv product autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
  })
  it('should emit an event when a product is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="autocomplete"]')
    const product = {
      id: 1,
      name: 'product'
    }
    autocomplete.vm.$emit('autocomplete:selected', product)
    const selectedCalls = wrapper.emitted('products:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toEqual(product)
  })
})
