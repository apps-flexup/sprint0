import { shallowMount } from '@vue/test-utils'
import FvThirdPartyAccountIndex from './index.vue'

const $router = {
  push: jest.fn(),
}

let $rights = {
  canCreateThirdParty: jest.fn(),
}

const localThirdParty = { id: 1, directory: 'Local' }
const flexupThirdParty = { id: 2, directory: 'Flexup', flexup_id: 1 }

const factory = () => {
  return shallowMount(FvThirdPartyAccountIndex, {
    mocks: {
      $t: (msg) => msg,
      $router,
      $rights,
    },
  })
}
afterEach(() => {
  jest.clearAllMocks()
})

describe('FvThirdPartyAccountIndex', () => {
  it('should render a FvThirdPartyAccountIndex', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="headerIndex"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="thirdPartyAccountList"]').exists()).toBe(true)
  })
  it('should push the route of new third party account', () => {
    const wrapper = factory()
    const headerIndex = wrapper.find('[data-testid="headerIndex"]')
    headerIndex.vm.$emit('button:click')
    expect($router.push).toHaveBeenCalledTimes(1)
    const newThirdPartyAccountsRoute = 'thirdPartyAccounts/new'
    expect($router.push).toHaveBeenCalledWith(newThirdPartyAccountsRoute)
  })
  describe('Cannot create', () => {
    beforeEach(() => {
      $rights = {
        canCreateThirdParty: () => {
          return false
        },
      }
    })
    it('should render a FvThirdPartyAccountIndex', () => {
      const wrapper = factory()
      expect(wrapper.find('[data-testid="createBtn"]').exists()).toBe(false)
      expect(wrapper.find('[data-testid="thirdPartyAccountList"]').exists()).toBe(true)
    })
  })
  it('should push the route of the selected local third party account', () => {
    const wrapper = factory()
    const thirdPartyAccountList = wrapper.find('[data-testid="thirdPartyAccountList"]')
    thirdPartyAccountList.vm.$emit('list:selected', localThirdParty)
    expect($router.push).toHaveBeenCalledTimes(1)
    const thirdPartyAccountIdRoute = '/thirdPartyAccounts/' + localThirdParty.id
    expect($router.push).toHaveBeenCalledWith(thirdPartyAccountIdRoute)
  })
  it('should push the route of the selected flexup third party account', () => {
    const wrapper = factory()
    const thirdPartyAccountList = wrapper.find('[data-testid="thirdPartyAccountList"]')
    thirdPartyAccountList.vm.$emit('list:selected', flexupThirdParty)
    expect($router.push).toHaveBeenCalledTimes(1)
    const thirdPartyAccountIdRoute = '/accounts/' + flexupThirdParty.flexup_id
    expect($router.push).toHaveBeenCalledWith(thirdPartyAccountIdRoute)
  })
})
