import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import availableThirdPartyAccounts from '../availableThirdPartyAccounts'

const localVue = createLocalVue()
localVue.use(Vuex)

const $activeAccount = {
  get() {
    return 1
  }
}

const $directory = {
  getAccountById(id) {
    if (id === 1) {
      return flexupAccounts[0]
    }
    if (id === 2) {
      return flexupAccounts[1]
    }
    if (id === 3) {
      return flexupAccounts[2]
    }
  },
  allAccounts() {
    return []
  }
}

const TestComponent = {
  render() {},
  mixins: [availableThirdPartyAccounts]
}

const localThirdParties = [
  {
    type: 'Personal',
    directory: 'Local',
    lastname: 'Third-party',
    firstname: 'Personal',
    name: 'Personal Third-party',
    account_id: 1,
    id: 3,
    avatar: 'avatarLocalPersonal'
  },
  {
    type: 'Business',
    directory: 'Local',
    name: 'Business',
    account_id: 1,
    id: 4,
    avatar: 'avatarLocalBusiness'
  },
  {
    type: 'SubAccount',
    directory: 'Local',
    owners: [],
    name: 'Sub third-party',
    account_id: 1,
    id: 5,
    avatar: 'avatarLocalSubThirdParty'
  }
]

const flexupThirdParties = [
  {
    directory: 'Flexup',
    account_id: 1,
    flexup_id: 2,
    id: 4
  },
  {
    directory: 'Flexup',
    account_id: 1,
    flexup_id: 3,
    id: 5
  }
]

const flexupAccounts = [
  {
    id: '1',
    firstname: 'Active',
    lastname: 'account',
    name: 'Active account',
    type: 'Personal',
    medias: [],
    avatar: 'avatarActiveAccount'
  },
  {
    id: '2',
    name: 'Cosys',
    type: 'Business',
    medias: [],
    avatar: 'avatarCosys'
  },
  {
    id: '3',
    name: 'Flexup',
    type: 'SubAccount',
    medias: [],
    owners: [],
    avatar: 'avatarFlexup'
  },
  {
    id: '4',
    firstname: 'Gaston',
    lastname: 'Lagaffe',
    name: 'Gaston Lagaffe',
    type: 'Personal',
    medias: [],
    avatar: 'avatarGaston'
  }
]

describe('Available third party accounts', () => {
  let wrapper
  let store
  describe('No flexup accounts, no third parties', () => {
    beforeEach(() => {
      // eslint-disable-next-line import/no-named-as-default-member
      store = new Vuex.Store({
        modules: {
          thirdPartyAccounts: {
            namespaced: true,
            getters: {
              local: () => [],
              flexup: () => []
            }
          }
        }
      })
      wrapper = mount(TestComponent, {
        localVue,
        store,
        mocks: {
          $directory
        }
      })
    })
    it('should return an empty list', async () => {
      const expectedList = {
        localThirdParties: [],
        flexupThirdParties: [],
        flexupAccounts: []
      }
      expect(await wrapper.vm.getAvailableThirdParties()).toEqual(expectedList)
    })
  })
  describe('Only local third parties', () => {
    beforeEach(() => {
      // eslint-disable-next-line import/no-named-as-default-member
      store = new Vuex.Store({
        modules: {
          thirdPartyAccounts: {
            namespaced: true,
            getters: {
              local: () => localThirdParties,
              flexup: () => []
            }
          }
        }
      })
      wrapper = mount(TestComponent, {
        localVue,
        store,
        mocks: {
          $directory
        }
      })
    })
    it('should return list of local third parties and empty list for flexup third parties and flexup accounts', async () => {
      const expectedList = {
        localThirdParties,
        flexupThirdParties: [],
        flexupAccounts: []
      }
      expect(await wrapper.vm.getAvailableThirdParties()).toEqual(expectedList)
    })
  })
  describe('Only flexup third-parties', () => {
    beforeEach(() => {
      // eslint-disable-next-line import/no-named-as-default-member
      store = new Vuex.Store({
        modules: {
          thirdPartyAccounts: {
            namespaced: true,
            getters: {
              local: () => [],
              flexup: () => flexupThirdParties
            }
          }
        }
      })
      wrapper = mount(TestComponent, {
        localVue,
        store,
        mocks: {
          $directory
        }
      })
    })
    it('should return the list of flexup third-parties', async () => {
      const expectedFlexupThirdParties = [
        {
          type: 'Business',
          name: 'Cosys',
          directory: 'Flexup',
          account_id: 1,
          flexup_id: 2,
          id: 4,
          avatar: 'avatarCosys'
        },
        {
          type: 'SubAccount',
          name: 'Flexup',
          directory: 'Flexup',
          account_id: 1,
          flexup_id: 3,
          id: 5,
          avatar: 'avatarFlexup'
        }
      ]
      const expectedList = {
        localThirdParties: [],
        flexupThirdParties: expectedFlexupThirdParties,
        flexupAccounts: []
      }
      expect(await wrapper.vm.getAvailableThirdParties()).toEqual(expectedList)
    })
  })
  describe('Only flexup accounts', () => {
    beforeEach(() => {
      // eslint-disable-next-line import/no-named-as-default-member
      store = new Vuex.Store({
        modules: {
          thirdPartyAccounts: {
            namespaced: true,
            getters: {
              local: () => [],
              flexup: () => []
            }
          }
        }
      })
      $directory.allAccounts = () => {
        return flexupAccounts
      }
      wrapper = mount(TestComponent, {
        localVue,
        store,
        mocks: {
          $directory,
          $activeAccount
        }
      })
    })
    it('should return the list of flexup accounts without active account', async () => {
      const expectedFlexupAccounts = [
        {
          id: 2,
          type: 'Business',
          name: 'Cosys',
          avatar: 'avatarCosys'
        },
        {
          id: 3,
          type: 'SubAccount',
          name: 'Flexup',
          avatar: 'avatarFlexup'
        },
        {
          id: 4,
          type: 'Personal',
          name: 'Gaston Lagaffe',
          avatar: 'avatarGaston'
        }
      ]

      const expectedList = {
        localThirdParties: [],
        flexupThirdParties: [],
        flexupAccounts: expectedFlexupAccounts
      }
      expect(await wrapper.vm.getAvailableThirdParties()).toEqual(expectedList)
    })
  })
  describe('Flexup account already added', () => {
    beforeEach(() => {
      // eslint-disable-next-line import/no-named-as-default-member
      store = new Vuex.Store({
        modules: {
          thirdPartyAccounts: {
            namespaced: true,
            getters: {
              local: () => [],
              flexup: () => flexupThirdParties
            }
          }
        }
      })
      $directory.allAccounts = () => {
        return flexupAccounts
      }
      wrapper = mount(TestComponent, {
        localVue,
        store,
        mocks: {
          $directory,
          $activeAccount
        }
      })
    })
    it('should remove flexup third parties from flexup accounts list', async () => {
      const expectedFlexupThirdParties = [
        {
          type: 'Business',
          name: 'Cosys',
          directory: 'Flexup',
          account_id: 1,
          flexup_id: 2,
          id: 4,
          avatar: 'avatarCosys'
        },
        {
          type: 'SubAccount',
          name: 'Flexup',
          directory: 'Flexup',
          account_id: 1,
          flexup_id: 3,
          id: 5,
          avatar: 'avatarFlexup'
        }
      ]
      const expectedFlexupAccounts = [
        {
          id: 4,
          type: 'Personal',
          name: 'Gaston Lagaffe',
          avatar: 'avatarGaston'
        }
      ]

      const expectedList = {
        localThirdParties: [],
        flexupThirdParties: expectedFlexupThirdParties,
        flexupAccounts: expectedFlexupAccounts
      }
      expect(await wrapper.vm.getAvailableThirdParties()).toEqual(expectedList)
    })
  })
})
