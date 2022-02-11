import { shallowMount } from '@vue/test-utils'
import FvPaymentConditionDataTable from './index.vue'

describe('FvPaymentConditionDataTable', () => {
  it('should render a fv payment condition data table', () => {
    const wrapper = shallowMount(FvPaymentConditionDataTable)
    expect(wrapper.find('[data-testid="dataTable"]').exists()).toBeTruthy()
  })
  it('should emit an event when a row is selected', () => {
    const wrapper = shallowMount(FvPaymentConditionDataTable)
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    dataTable.vm.$emit('dataTable:selected')
    const selectedCalls = wrapper.emitted('dataTable:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
  it('should emit an event when need to sort', () => {
    const wrapper = shallowMount(FvPaymentConditionDataTable)
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    dataTable.vm.$emit('dataTable:sortBy')
    const sortByCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortByCalls).toBeTruthy()
    expect(sortByCalls).toHaveLength(1)
  })
})
