import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvSettingsIndex from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const account = {
  id: 1,
}

const factory = () => {
  return shallowMount(FvSettingsIndex, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
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
        getters: {
          selected: () => 1,
          findById: () => () => account,
        },
      },
    },
  })
})

describe('FvSettingsIndex', () => {
  it('should render a fv settings index', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="title"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-testid="tab"]').length).toBe(2)
    expect(wrapper.findAll('[data-testid="tabItem"]').length).toBe(2)
  })
})
