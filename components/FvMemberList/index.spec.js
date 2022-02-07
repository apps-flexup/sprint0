import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvMemberList from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const $displayRules = {
  userNameFromUuid: jest.fn(),
  role: jest.fn(),
}

let store

const factory = () => {
  return shallowMount(FvMemberList, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $displayRules,
    },
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      accounts: {
        namespaced: true,
        actions: {
          get: jest.fn(),
        },
      },
      members: {
        namespaced: true,
        actions: {
          get: jest.fn(),
        },
      },
    },
  })
})

describe('FvMemberIndex', () => {
  it('should render a fv member list', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="table"]').exists()).toBe(true)
  })
  it('should emit an event when member is selected', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    const member = {
      name: 'member',
    }
    table.vm.$emit('list:selected', member)
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toEqual(member)
  })
})
