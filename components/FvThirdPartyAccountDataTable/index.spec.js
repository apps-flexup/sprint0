import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'Vuex'
import FvThirdPartyAccountDataTable from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvThirdPartyAccountDataTable', () => {
  let store
  let vuetify

  const factory = () => {
    return mount(FvThirdPartyAccountDataTable, {
      localVue,
      store,
      vuetify
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
})
