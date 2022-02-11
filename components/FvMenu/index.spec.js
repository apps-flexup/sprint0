import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvMenu from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const account = {
  avatar: '/images/avatar-0.png',
  country_id: 77,
  name: 'toto',
  offers_count: 0,
  params: {},
  parent_id: null,
  roles: ['customer', 'supplier'],
  roles_methods: null,
  supplier: false,
  user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140',
  id: 1,
}

const $activeAccount = {
  get: jest.fn(),
}

const $displayRules = {
  accountName: jest.fn(),
  userName: jest.fn(),
}

const loggedInAuth = {
  loggedIn: true,
  user: {
    preferred_username: 'toto',
  },
}

const loggedOutAuth = {
  loggedIn: false,
}

const loggedInFactory = () => {
  return shallowMount(FvMenu, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $auth: loggedInAuth,
      $activeAccount,
      $displayRules,
    },
  })
}

const loggedOutFactory = () => {
  return shallowMount(FvMenu, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $auth: loggedOutAuth,
    },
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      accounts: {
        namespaced: true,
        getters: {
          selected: jest.fn(),
          findById: () => () => account,
        },
      },
      settings: {
        namespaced: true,
        actions: {
          getGlobalMenu: jest.fn(),
        },
        getters: {
          globalMenu: jest.fn(),
        },
      },
    },
  })
})

describe('FvMenu', () => {
  test('should display all menus if user is connected', () => {
    const wrapper = loggedInFactory()
    expect(wrapper.find('[data-testid="spaceMenu"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="accountMenu"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="userMenu"]').exists()).toBeTruthy()
    expect(wrapper.findAll('[data-testid="globalMenu"]').length).toBe(1)
    expect(wrapper.find('[data-testid="logoutButton"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="loginButton"]').exists()).toBe(false)
  })
  test('should display global menu and login button if user is not connected', () => {
    const wrapper = loggedOutFactory()
    expect(wrapper.find('[data-testid="spaceMenu"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="accountMenu"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="userMenu"]').exists()).toBe(false)
    expect(wrapper.findAll('[data-testid="globalMenu"]').length).toBe(1)
    expect(wrapper.find('[data-testid="logoutButton"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="loginButton"]').exists()).toBeTruthy()
  })
})
