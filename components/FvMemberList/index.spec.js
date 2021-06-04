import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvMemberList from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const account = {
  name: 'Hello World'
}

let store

const $activeAccount = {
  get: () => 42
}

const factory = () => {
  return shallowMount(FvMemberList, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $activeAccount
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      accounts: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          findById: () => () => account
        }
      }
    }
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
    table.vm.$emit('list:selected')
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
})
