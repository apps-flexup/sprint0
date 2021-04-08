import { mount } from '@vue/test-utils'
import FvVatField from './index.vue'

describe('FvVatField', () => {
  it('should render a vat field', () => {
    const wrapper = mount(FvVatField)
    expect(wrapper.find('[data-testid="vatField"]').exists()).toBe(true)
  })
  it('should emit an event when vat change', () => {
    const wrapper = mount(FvVatField)
    const vatField = wrapper.find('[data-testid="vatField"]')
    const vat = 20
    vatField.vm.$emit('input', vat)
    const submittedCalls = wrapper.emitted('vat:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toBe(vat)
  })
})
