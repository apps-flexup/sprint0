import { shallowMount } from '@vue/test-utils'
import FvPaymentStructureDataTable from './index.vue'

const $displayRules = {
  paymentStructureRisk: jest.fn()
}

const factory = () => {
  return shallowMount(FvPaymentStructureDataTable, {
    mocks: {
      $displayRules
    }
  })
}

describe('FvPaymentStructureDataTable', () => {
  it('should render a fv payment structure data table', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="dataTable"]').exists()).toBe(true)
  })
  it('should emit an event when payment structure is selected', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    const paymentStructure = {
      foo: 'foo'
    }
    dataTable.vm.$emit('dataTable:selected', paymentStructure)
    const selectedCalls = wrapper.emitted('dataTable:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toEqual(paymentStructure)
  })
  it('should emit an event when need to sort', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    const sortBy = {
      foo: 'foo'
    }
    dataTable.vm.$emit('dataTable:sortBy', sortBy)
    const sortByCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortByCalls).toBeTruthy()
    expect(sortByCalls).toHaveLength(1)
    expect(sortByCalls[0][0]).toEqual(sortBy)
  })
})
