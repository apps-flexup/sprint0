import { createLocalVue, mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import FvUserAccount from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvUserAccount', () => {
  const account = {
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
    user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140',
  }
  let store
  let vuetify
  const factory = (propsData) => {
    return mount(FvUserAccount, {
      store,
      vuetify,
      localVue,
      stubs: {
        FvLoginButton: true,
        FvListAccounts: true,
      },
      mocks: {
        $auth: {
          loggedIn: propsData ? propsData.loggedIn : true,
        },
        $activeAccount: {
          get: () => jest.fn(),
        },
        theme: {},
      },
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        accounts: {
          namespaced: true,
          getters: {
            accountId: jest.fn(),
            findById: () => () => account,
          },
        },
      },
    })
    vuetify = new Vuetify()
  })
  it('should render a fvUserAccount when logged in', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="loginBtn"]').exists()).toBeFalsy()
    expect(wrapper.find('[data-testid="menu"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="accountBtn"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="accountList"]').exists()).toBeFalsy()
  })
  it('should render a loggedIn button when logged out', () => {
    const wrapper = factory({ loggedIn: false })
    expect(wrapper.find('[data-testid="loginBtn"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="menu"]').exists()).toBeFalsy()
    expect(wrapper.find('[data-testid="accountBtn"]').exists()).toBeFalsy()
    expect(wrapper.find('[data-testid="accountList"]').exists()).toBeFalsy()
  })
  it('should show the account list when button is clicked', async () => {
    const wrapper = factory()
    await wrapper.find('[data-testid="accountBtn"]').trigger('click')
    expect(wrapper.find('[data-testid="accountList"]').exists()).toBeTruthy()
  })
})
