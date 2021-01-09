import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvOfferList from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvOfferList', () => {
  let store

  const headersOffers = {
    main: [],
    sub: []
  }
  const factory = () => {
    return shallowMount(FvOfferList, {
      localVue,
      store,
      mocks: {
        $t: (msg) => msg,
        $activeAccount: {
          headersOffers: () => headersOffers,
          offers: jest.fn()
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
            getOfferHeaders: jest.fn()
          }
        },
        offers: {
          namespaced: true,
          actions: {
            get: jest.fn()
          }
        }
      }
    })
  })
  it('should render a fv offer list', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="header"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="recursiveDataTable"]').exists()).toBe(
      true
    )
  })
  it('should emit an event when offer is selected', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="recursiveDataTable"]')
    dataTable.vm.$emit('dataTable:selected')
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
})
