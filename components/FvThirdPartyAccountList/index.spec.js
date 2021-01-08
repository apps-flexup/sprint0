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
        $dataTable: {
          filter: jest.fn(),
          sortByKey: jest.fn()
        }
      }
    })
  }
  it('should render a fv third party account list', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="header"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="dataTable"]').exists()).toBe(true)
  })
  it('should emit an event when third party account is selected', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    dataTable.vm.$emit('dataTable:selected')
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
})
