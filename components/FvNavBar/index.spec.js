import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import FvNavBar from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvNavBar', () => {
  const account = {}
  let store
  let vuetify
  const slot = 'HelloWorld'
  const factory = (payload) => {
    return shallowMount(FvNavBar, {
      localVue,
      store,
      vuetify,
      mocks: {
        $auth: {
          loggedIn: payload ? payload.loggedIn : true,
          user: {
            preferred_username: 'HelloWorld',
          },
        },
        $t: (msg) => msg,
      },
      slots: {
        left: slot,
        right: slot,
      },
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        settings: {
          namespaced: true,
          actions: {
            getSellerNavBar: jest.fn(),
            getManageNavBar: jest.fn(),
          },
        },
        accounts: {
          namespaced: true,
          getters: {
            selected: jest.fn(),
            findById: () => () => account,
          },
        },
      },
    })
    vuetify = new Vuetify()
  })
  it('should render a fv nav bar clean when user is disconnected', () => {
    const wrapper = factory({ loggedIn: false })
    expect(wrapper.find('[data-testid="navbar"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="icon-navbar"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="title-navbar"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="slot-left"]').exists()).toBeFalsy()
    expect(wrapper.find('[data-testid="slot-right"]').exists()).toBeFalsy()
  })
  it('should have data in slot left', () => {
    const wrapper = factory()
    const slotLeft = wrapper.find('[data-testid="slot-left"]')
    expect(slotLeft.text()).toBe(slot)
  })
  it('should have data in slot right', () => {
    const wrapper = factory()
    const slotRight = wrapper.find('[data-testid="slot-right"]')
    expect(slotRight.text()).toBe(slot)
  })
})
