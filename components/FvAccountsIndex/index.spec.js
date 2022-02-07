import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvAccountsIndex from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

const $auth = {
  user: {
    sub: '',
  },
}

const givenRole = 'plop'
const $repos = {
  givenRoles: {
    index: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve([givenRole])
        }, 300)
      }),
  },
}

describe('FvAccountsIndex', () => {
  const accounts = [
    {
      avatar: '/images/avatar-0.png',
      country_id: 77,
      currency: 'EUR',
      id: 1,
      name: 'account 1',
      params: {},
      parent_id: null,
      roles: ['customer', 'supplier'],
      roles_methods: null,
      supplier: false,
      type: 'Personal',
      user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140',
    },
    {
      avatar: '/images/avatar-1.png',
      country_id: 77,
      currency: 'EUR',
      id: 2,
      name: 'account 2',
      params: {},
      parent_id: null,
      roles: ['customer', 'supplier'],
      roles_methods: null,
      supplier: false,
      type: 'Business',
      user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140',
    },
    {
      avatar: '/images/avatar-2.png',
      country_id: 77,
      currency: 'EUR',
      id: 3,
      name: 'account 3',
      params: {},
      parent_id: null,
      roles: ['customer', 'supplier'],
      roles_methods: null,
      supplier: false,
      type: 'SubAccount',
      user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140',
    },
  ]
  const $router = {
    push: jest.fn(),
  }
  let store

  const factory = () => {
    return mount(FvAccountsIndex, {
      localVue,
      store,
      mocks: {
        $t: (msg) => msg,
        $router,
        $auth,
        $repos,
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
            all: () => accounts,
          },
        },
      },
    })
  })
  it('should render an accounts index component', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="title"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="headerIndex"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="accountList"]').exists()).toBe(true)
  })
  it('should display account cards', () => {
    const wrapper = factory()
    expect(wrapper.findAll('[data-testid="accountCard"]').length).toBe(3)
  })
  it('should emit an event when click on create account button', () => {
    const wrapper = factory()
    const headerIndex = wrapper.find('[data-testid="headerIndex"]')
    headerIndex.vm.$emit('button:click')
    const createCalls = wrapper.emitted('accounts:create')
    expect(createCalls).toBeTruthy()
    expect(createCalls).toHaveLength(1)
  })
  it('should give all accounts in accounts compute', () => {
    const wrapper = factory()
    expect(wrapper.vm.accounts).toBe(accounts)
  })
})
