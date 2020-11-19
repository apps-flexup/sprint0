import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvAccountsIndex from './index'
import i18n from '~/.storybook/i18n'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvAccountsIndex', () => {
  const accounts = [
    {
      avatar: '/images/avatar-0.png',
      country_id: 77,
      currency: 'EUR',
      id: 1,
      name: 'account 1',
      offers_count: 0,
      params: {},
      parent_id: null,
      roles: ['customer', 'supplier'],
      roles_methods: null,
      supplier: false,
      user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140'
    },
    {
      avatar: '/images/avatar-1.png',
      country_id: 77,
      currency: 'EUR',
      id: 2,
      name: 'account 2',
      offers_count: 0,
      params: {},
      parent_id: null,
      roles: ['customer', 'supplier'],
      roles_methods: null,
      supplier: false,
      user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140'
    },
    {
      avatar: '/images/avatar-2.png',
      country_id: 77,
      currency: 'EUR',
      id: 3,
      name: 'account 3',
      offers_count: 0,
      params: {},
      parent_id: null,
      roles: ['customer', 'supplier'],
      roles_methods: null,
      supplier: false,
      user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140'
    }
  ]
  let store

  const factory = () => {
    return mount(FvAccountsIndex, {
      localVue,
      i18n,
      store,
      computed: {
        accounts: () => accounts
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
          }
        }
      }
    })
  })
  it('should render an accounts index component', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="title"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="createButton"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="accountList"]').exists()).toBe(true)
  })
  it('should display account cards', () => {
    const wrapper = factory()
    expect(wrapper.findAll('[data-testid="accountCard"]').length).toBe(3)
  })
  it('should emit an event when click on create account button', () => {
    const wrapper = factory()
    const createButton = wrapper.find('[data-testid="createButton"]')
    createButton.vm.$emit('button:click')
    const createCalls = wrapper.emitted('accounts:create')
    expect(createCalls).toBeTruthy()
    expect(createCalls).toHaveLength(1)
  })
})
