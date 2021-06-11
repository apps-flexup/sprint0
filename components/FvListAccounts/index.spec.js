import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvListAccounts from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const others = [
  {
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
    id: 1
  },
  {
    avatar: '/images/avatar-2.png',
    country_id: 77,
    id: 3,
    name: 'Johanna (supplier)',
    offers_count: 0,
    params: {},
    parent_id: null,
    roles: ['supplier'],
    roles_methods: null,
    supplier: false,
    user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140'
  }
]

const logoutFn = jest.fn()
const setFn = jest.fn()
const pushFn = jest.fn()

const factory = () => {
  return shallowMount(FvListAccounts, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $auth: {
        logout: logoutFn
      },
      $activeAccount: {
        set: setFn
      },
      $router: {
        push: pushFn
      }
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
          others: () => others,
          findById: () => () => {}
        }
      }
    }
  })
})

describe('FvListAccounts', () => {
  it('should render a fv list accounts', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="userInfo"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="accountInfo"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-testid="otherAccount"]').length).toBe(
      others.length
    )
    expect(wrapper.find('[data-testid="createAccount"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="manageAccounts"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="help"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="logout"]').exists()).toBe(true)
  })
  it('should call auth logout function when logout clicked', () => {
    const wrapper = factory()
    const logoutButton = wrapper.find('[data-testid="logout"]')
    logoutButton.vm.$emit('click')
    expect(logoutFn).toHaveBeenCalledTimes(1)
  })
  it('should set current account in active account when an account is clicked', () => {
    const wrapper = factory()
    const firstAccount = wrapper.find('[data-testid="otherAccount"]')
    firstAccount.vm.$emit('click')
    expect(setFn).toHaveBeenCalledTimes(1)
    expect(setFn).toHaveBeenCalledWith(others[0].id)
  })
  it('should redirect to accounts page when clicked on manage accounts', () => {
    const wrapper = factory()
    const manageAccounts = wrapper.find('[data-testid="manageAccounts"]')
    manageAccounts.vm.$emit('click')
    expect(pushFn).toHaveBeenCalledTimes(1)
    const accountsRoute = '/accounts'
    expect(pushFn).toHaveBeenCalledWith(accountsRoute)
  })
})
