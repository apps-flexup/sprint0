import { shallowMount } from '@vue/test-utils'
import FvOrderList from './index.vue'

const $displayRules = {
  localeDate: jest.fn(),
  priceToPreferredCurrency: jest.fn(),
  paymentStructure: jest.fn(),
  status: jest.fn(),
}

const factory = () => {
  return shallowMount(FvOrderList, {
    mocks: {
      $t: (msg) => msg,
      $displayRules,
    },
  })
}

describe('FvOrderList', () => {
  it('should render a fv order list', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="indexTable"]').exists()).toBeTruthy()
  })
  it('should emit an event when an order is selected', () => {
    const wrapper = factory()
    const indexTable = wrapper.find('[data-testid="indexTable"]')
    const order = 'foo'
    indexTable.vm.$emit('list:selected', order)
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(order)
  })
})
