import { shallowMount } from '@vue/test-utils'
import FvThirdPartyAccountIndex from './index.vue'

const pushFn = jest.fn()
const thirdParty = { id: 1 }
const factory = () => {
  return shallowMount(FvThirdPartyAccountIndex, {
    mocks: {
      $t: (msg) => msg,
      $router: {
        push: pushFn
      }
    }
  })
}
afterEach(() => {
  jest.clearAllMocks()
})
describe('FvThirdPartyAccountIndex', () => {
  it('should render a FvThirdPartyAccountIndex', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="primaryBtn"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="thirdPartyAccountList"]').exists()).toBe(
      true
    )
  })
  it('should push the route of new third party account', () => {
    const wrapper = factory()
    const createBtn = wrapper.find('[data-testid="primaryBtn"]')
    createBtn.vm.$emit('button:click')
    expect(pushFn).toHaveBeenCalledTimes(1)
    const newThirdPartyAccountsRoute = 'thirdPartyAccounts/new'
    expect(pushFn).toHaveBeenCalledWith(newThirdPartyAccountsRoute)
  })
  it('should push the route of the selected third party account', () => {
    const wrapper = factory()
    const thirdPartyAccountList = wrapper.find(
      '[data-testid="thirdPartyAccountList"]'
    )
    thirdPartyAccountList.vm.$emit('list:selected', thirdParty)
    expect(pushFn).toHaveBeenCalledTimes(1)
    const thirdPartyAccountIdRoute = '/thirdPartyAccounts/' + thirdParty.id
    expect(pushFn).toHaveBeenCalledWith(thirdPartyAccountIdRoute)
  })
})
