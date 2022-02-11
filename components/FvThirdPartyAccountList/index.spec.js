import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvThirdPartyAccountList from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

describe('FvThirdPartyAccountList', () => {
  const factory = () => {
    return shallowMount(FvThirdPartyAccountList, {
      localVue,
      store,
      mocks: {
        $t: (msg) => msg,
        $activeAccount: {
          headersThirdPartyAccounts: jest.fn(),
          thirdPartyAccounts: jest.fn(),
        },
        $displayRules: {
          legalStructure: jest.fn(),
        },
      },
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        thirdPartyAccounts: {
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
