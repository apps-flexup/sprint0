import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'Vuex'
import FvThirdPartyAccountDataTable from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
let vuetify

describe('FvThirdPartyAccountDataTable', () => {
  const factory = () => {
    return shallowMount(FvThirdPartyAccountDataTable, {
      localVue,
      store,
      vuetify,
      mocks: {
        $t: (msg) => msg
      }
    })
  }
  beforeEach(() => {
    vuetify = new Vuetify()
    store = new Vuex.Store({
      modules: {
        headers: {
          namespaced: true,
          actions: {
            getThirdPartyAccountHeaders: jest.fn()
          }
        },
        thirdPartyAccounts: {
          namespaced: true,
          actions: {
            getAll: jest.fn()
          }
        },
        countries: {
          namespaced: true,
          actions: {
            get: jest.fn()
          }
        },
        contracts: {
          namespaced: true,
          actions: {
            getLegalStructures: jest.fn()
          }
        }
      }
    })
  })
  it('should render a fv third party account data table', () => {
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
