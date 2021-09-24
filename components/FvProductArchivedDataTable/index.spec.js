import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'Vuex'
import FvProductDataTable from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
let vuetify

describe('FvProductDataTable', () => {
  const factory = () => {
    return shallowMount(FvProductDataTable, {
      localVue,
      store,
      vuetify,
      mocks: {
        $t: (msg) => msg
      }
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        products: {
          namespaced: true,
          state: {},
          actions: {
            remove: jest.fn()
          }
        },
        categories: {
          namespaced: true,
          state: {},
          actions: {
            get: jest.fn()
          }
        }
      }
    })
    vuetify = new Vuetify()
  })
  it('should render a fv generic product data table', () => {
    const wrapper = factory()
    expect(
      wrapper.find('[data-testid="fvGenericProductDataTable"]').exists()
    ).toBe(true)
  })
  it('should emit an event when a row is selected', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="fvGenericProductDataTable"]')
    dataTable.vm.$emit('dataTable:selected')
    const selectedCalls = wrapper.emitted('dataTable:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
  it('should emit an event when need to sort', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="fvGenericProductDataTable"]')
    dataTable.vm.$emit('dataTable:sortBy')
    const sortByCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortByCalls).toBeTruthy()
    expect(sortByCalls).toHaveLength(1)
  })
})
