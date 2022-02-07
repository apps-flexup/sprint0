import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvThirdPartyAccountAutocomplete from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvThirdPartyAccountAutocomplete', () => {
  let vuetify
  let store
  const activeAccount = {
    id: 2,
    name: 'Active account',
  }
  const localThirdPartyAccounts = [
    {
      id: 1,
      directory: 'Local',
      name: 'fred',
      avatar: 'avatar-fred',
    },
  ]
  const flexupThirdPartyAccounts = [
    {
      name: 'Cosys',
      flexup_id: 3,
      directory: 'Flexup',
      id: 2,
    },
  ]
  const flexupAccounts = [
    {
      name: 'Flexup',
      id: 1,
    },
  ]
  const allItems = {
    flexupThirdParties: flexupThirdPartyAccounts,
    localThirdParties: localThirdPartyAccounts,
    flexupAccounts,
  }
  const thirdPartyAccounts = localThirdPartyAccounts + flexupThirdPartyAccounts + flexupAccounts
  const $activeAccount = {
    allThirdPartyAccounts: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([thirdPartyAccounts])
        }, 300)
      }),
  }
  const factory = (propsData) => {
    return mount(FvThirdPartyAccountAutocomplete, {
      localVue,
      vuetify,
      store,
      propsData: {
        ...propsData,
      },
      stubs: {
        FvAutocomplete: true,
      },
      mocks: {
        $activeAccount,
        $t: (msg) => msg,
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
        accounts: {
          namespaced: true,
          getters: {
            findById: () => () => {
              return activeAccount
            },
          },
        },
      },
    })
  })
  it('should render a third party autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
  })
  it('should emit an event when third party account is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="autocomplete"]')
    autocomplete.vm.$emit('autocomplete:selected', localThirdPartyAccounts[0])
    const submittedCalls = wrapper.emitted('thirdPartyAccount:selected')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toBe(localThirdPartyAccounts[0])
  })
  it('should format for autocomplete', async () => {
    const wrapper = factory()
    await wrapper.setData({ allItems })
    const expectedItems = [
      { header: 'third-parties.flexupThirdParties' },
      flexupThirdPartyAccounts[0],
      { divider: true },
      { header: 'third-parties.localThirdParties' },
      localThirdPartyAccounts[0],
      { divider: true },
      { header: 'third-parties.flexupAccounts' },
      flexupAccounts[0],
    ]
    expect(wrapper.vm.items).toEqual(expectedItems)
  })
  it('should remove transmitted local third parties', async () => {
    const toRemove = {
      localThirdParties: [1],
    }
    const wrapper = factory({ toRemove })
    await wrapper.setData({ allItems })
    const expectedItems = [
      { header: 'third-parties.flexupThirdParties' },
      flexupThirdPartyAccounts[0],
      { divider: true },
      { header: 'third-parties.flexupAccounts' },
      flexupAccounts[0],
    ]
    expect(wrapper.vm.items).toEqual(expectedItems)
  })
  it('should remove transmitted flexup third parties', async () => {
    const toRemove = {
      flexupThirdParties: [2],
    }
    const wrapper = factory({ toRemove })
    await wrapper.setData({ allItems })
    const expectedItems = [
      { header: 'third-parties.localThirdParties' },
      localThirdPartyAccounts[0],
      { divider: true },
      { header: 'third-parties.flexupAccounts' },
      flexupAccounts[0],
    ]
    expect(wrapper.vm.items).toEqual(expectedItems)
  })
  it('should remove transmitted flexup account with same id as third party', async () => {
    const toRemove = {
      flexupAccounts: [1],
    }
    const wrapper = factory({ toRemove })
    await wrapper.setData({ allItems })
    const expectedItems = [
      { header: 'third-parties.flexupThirdParties' },
      flexupThirdPartyAccounts[0],
      { divider: true },
      { header: 'third-parties.localThirdParties' },
      localThirdPartyAccounts[0],
      { divider: true },
    ]
    expect(wrapper.vm.items).toEqual(expectedItems)
  })
})
