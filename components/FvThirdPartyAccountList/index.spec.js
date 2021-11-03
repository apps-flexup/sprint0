import { shallowMount } from '@vue/test-utils'
import FvThirdPartyAccountList from './index.vue'

describe('FvThirdPartyAccountList', () => {
  const factory = () => {
    return shallowMount(FvThirdPartyAccountList, {
      mocks: {
        $t: (msg) => msg,
        $activeAccount: {
          headersThirdPartyAccounts: jest.fn(),
          thirdPartyAccounts: jest.fn()
        },
        $displayRules: {
          legalStructure: jest.fn()
        }
      }
    })
  }
  it('should render a fv third party account list', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="table"]').exists()).toBe(true)
  })
  it('should emit an event when third party account is selected', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    table.vm.$emit('list:selected')
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
})
