import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import FvOfferDataTable from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
let vuetify

describe('FvOfferDataTable', () => {
  const factory = () => {
    return shallowMount(FvOfferDataTable, {
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
        offers: {
          namespaced: true,
          state: {},
          actions: {
            remove: jest.fn()
          }
        }
      }
    })
    vuetify = new Vuetify()
  })
  it('should render a fv offer data table', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="dataTable"]').exists()).toBe(true)
  })
  it('should emit an event when a row is selected', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    dataTable.vm.$emit('dataTable:selected')
    const selectedCalls = wrapper.emitted('dataTable:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
  it('should emit an event when need to sort', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    dataTable.vm.$emit('dataTable:sortBy')
    const sortByCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortByCalls).toBeTruthy()
    expect(sortByCalls).toHaveLength(1)
  })
})
