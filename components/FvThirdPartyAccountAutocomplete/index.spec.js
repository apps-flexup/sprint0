import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvThirdPartyAccountAutocomplete from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvThirdPartyAccountAutocomplete', () => {
  let vuetify
  let store
  const thirdPartyAccount = {
    avatar: 'jolie photo de fred',
    name: 'fredou'
  }
  const $activeAccount = {
    allThirdPartyAccounts: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([thirdPartyAccount])
        }, 300)
      })
  }
  const factory = () => {
    return mount(FvThirdPartyAccountAutocomplete, {
      localVue,
      vuetify,
      store,
      stubs: {
        FvAutocomplete: true
      },
      mocks: {
        $activeAccount
      }
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        thirdPartyAccounts: {
          namespaced: true,
          actions: {
            get: jest.fn()
          }
        }
      }
    })
  })
  it('should render a third party autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
  })
  it('should emit an event when third party account is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="autocomplete"]')
    autocomplete.vm.$emit('autocomplete:selected', thirdPartyAccount)
    const submittedCalls = wrapper.emitted('thirdPartyAccount:selected')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toBe(thirdPartyAccount)
  })
  it('should return the data of promise', () => {
    $activeAccount.allThirdPartyAccounts().then((data) => {
      expect(data).toEqual([thirdPartyAccount])
    })
  })
})
