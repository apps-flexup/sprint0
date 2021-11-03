import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvMemberIndex from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const $activeAccount = {
  type: () => {
    return 'Business'
  },
  get: jest.fn()
}

const $auth = {
  user: {
    sub: ''
  }
}

const cannotInviteMemberRights = {
  canInviteMember: () => {
    return false
  }
}

const canInviteMemberRights = {
  canInviteMember: () => {
    return true
  }
}

const cannotInviteMemberFactory = () => {
  return shallowMount(FvMemberIndex, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $activeAccount,
      $auth,
      $rights: cannotInviteMemberRights
    }
  })
}

const canInviteMemberFactory = () => {
  return shallowMount(FvMemberIndex, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $activeAccount,
      $auth,
      $rights: canInviteMemberRights
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      functionalRoles: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          all: jest.fn()
        }
      },
      accounts: {
        namespaced: true,
        actions: {
          all: jest.fn()
        }
      }
    }
  })
})

describe('FvMembersIndex', () => {
  it('should render a fv member index', () => {
    const wrapper = cannotInviteMemberFactory()
    expect(wrapper.find('[data-testid="memberList"]').exists()).toBe(true)
  })
  describe('Cannot invite a new member', () => {
    it('should have an invite button and a invite modal ', () => {
      const wrapper = cannotInviteMemberFactory()
      expect(wrapper.find('[data-testid="inviteMemberButton"]').exists()).toBe(
        false
      )
      expect(wrapper.find('[data-testid="inviteMemberModal"]').exists()).toBe(
        false
      )
    })
  })
  describe('Can invite a new member', () => {
    let wrapper
    beforeEach(() => {
      wrapper = canInviteMemberFactory()
    })
    it('should have an invite button and a invite modal ', () => {
      expect(wrapper.find('[data-testid="inviteMemberButton"]').exists()).toBe(
        true
      )
      expect(wrapper.find('[data-testid="inviteMemberModal"]').exists()).toBe(
        true
      )
      expect(wrapper.vm.dialog).toBe(false)
    })
    it('should display invite member modal when clicked on invite member button', () => {
      const inviteMemberButton = wrapper.find(
        '[data-testid="inviteMemberButton"]'
      )
      expect(wrapper.vm.dialog).toBe(false)
      inviteMemberButton.vm.$emit('button:click')
      expect(wrapper.vm.dialog).toBe(true)
    })
  })
})
