import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvMemberIndex from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const factory = () => {
  return shallowMount(FvMemberIndex, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      users: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          all: jest.fn()
        }
      },
      functionalRoles: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          all: jest.fn()
        }
      }
    }
  })
})

describe('FvMembersIndex', () => {
  it('should render a fv member index', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="inviteMemberButton"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-testid="memberList"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="inviteMemberModal"]').exists()).toBe(
      true
    )
    expect(wrapper.vm.dialog).toBe(false)
  })
  it('should display invite member modal when clicked on invite member button', () => {
    const wrapper = factory()
    const inviteMemberButton = wrapper.find(
      '[data-testid="inviteMemberButton"]'
    )
    expect(wrapper.vm.dialog).toBe(false)
    inviteMemberButton.vm.$emit('button:click')
    expect(wrapper.vm.dialog).toBe(true)
  })
})
