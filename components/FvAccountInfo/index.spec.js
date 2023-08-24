import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvAccountInfo from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let storeWithAccount
let storeWithoutAccount
const account = {
  name: 'toto',
  avatar: 'avatarPath'
}

const factoryWithAccount = () => {
  return mount(FvAccountInfo, {
    localVue,
    store: storeWithAccount,
    mocks: {
      $t: (msg) => msg
    }
  })
}

const factoryWithoutAccount = () => {
  return mount(FvAccountInfo, {
    localVue,
    store: storeWithoutAccount,
    mocks: {
      $t: (msg) => msg
    }
  })
}

beforeEach(() => {
  storeWithAccount = new Vuex.Store({
    modules: {
      accounts: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          current: jest.fn(),
          findById: () => () => account
        }
      }
    }
  })
  storeWithoutAccount = new Vuex.Store({
    modules: {
      accounts: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          current: jest.fn(),
          findById: () => () => null
        }
      }
    }
  })
})

describe('FvAccountInfo', () => {
  it('should render an fv account info', () => {
    const wrapper = factoryWithAccount()
    const accountInfo = wrapper.find('[data-testid="accountInfo"]')
    expect(accountInfo.exists()).toBeTruthy()
  })
  it('should compute account name when account is set', () => {
    const wrapper = factoryWithAccount()
    expect(wrapper.vm.name).toBe(account.name)
  })
  it('should compute account avatar when account is set', () => {
    const wrapper = factoryWithAccount()
    expect(wrapper.vm.avatar).toBe(account.avatar)
  })
  it('should compute null name when account is null', () => {
    const wrapper = factoryWithoutAccount()
    expect(wrapper.vm.name).toBe(null)
  })
  it('should compute null avatar when account is null', () => {
    const wrapper = factoryWithoutAccount()
    expect(wrapper.vm.avatar).toBe(null)
  })
})
