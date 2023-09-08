import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import FvProductUnitAutocomplete from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
let vuetify

const factory = () => {
  return shallowMount(FvProductUnitAutocomplete, {
    localVue,
    store,
    vuetify,
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvProductUnitAutocomplete', () => {
  beforeEach(() => {
    // eslint-disable-next-line import/no-named-as-default-member
    store = new Vuex.Store({
      modules: {
        offers: {
          namespaced: true,
          actions: {
            get: jest.fn()
          },
          getters: {
            getForProduct: (_productId) => () => {
              return []
            }
          }
        }
      }
    })
  })
  it('should render a fv product unit autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="unitAutocomplete"]').exists()).toBeTruthy()
  })
  it('should emit an event when a row is selected', () => {
    const wrapper = factory()
    const unitAutocomplete = wrapper.find('[data-testid="unitAutocomplete"]')
    unitAutocomplete.vm.$emit('unit:selected')
    const selectedCalls = wrapper.emitted('unit:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
  describe('Without offer existing for product', () => {
    beforeEach(() => {
      // eslint-disable-next-line import/no-named-as-default-member
      store = new Vuex.Store({
        modules: {
          offers: {
            namespaced: true,
            actions: {
              get: jest.fn()
            },
            getters: {
              getForProduct: (_productId) => () => {
                return []
              }
            }
          }
        }
      })
    })
    it('should not apply dimension filter', () => {
      const wrapper = factory()
      const unitAutocomplete = wrapper.find('[data-testid="unitAutocomplete"]')
      expect(unitAutocomplete.props().dimensionFilter).toBe(null)
    })
  })
  describe('With offer existing for product', () => {
    const dimension = 'test'
    beforeEach(() => {
      // eslint-disable-next-line import/no-named-as-default-member
      store = new Vuex.Store({
        modules: {
          offers: {
            namespaced: true,
            actions: {
              get: jest.fn()
            },
            getters: {
              getForProduct: (_productId) => () => {
                return [{ unit: { dimension } }]
              }
            }
          }
        }
      })
    })
  })
})
