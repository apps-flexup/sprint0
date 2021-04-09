import { mount } from '@vue/test-utils'
import FvVatField from './index.vue'

describe('FvVatField', () => {
  let vat = 20
  vat = (Math.round(vat * 100) / 100).toFixed(1)
  const factory = (propsData) => {
    return mount(FvVatField, {
      propsData: {
        ...propsData,
        vat
      }
    })
  }
  it('should render a vat field', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="vatField"]').exists()).toBe(true)
  })
  it('should emit an event when vat change', () => {
    const wrapper = factory()
    const vatField = wrapper.find('[data-testid="vatField"]')
    const vat = 20
    vatField.vm.$emit('input', vat)
    const submittedCalls = wrapper.emitted('vat:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toBe(vat)
  })
  it('should change vat when click outside', () => {
    const wrapper = factory()
    const vatField = wrapper.find('[data-testid="vatField"]')
    vatField.vm.$emit('click:outside', vat)
    expect(vat).toStrictEqual('20.0')
  })
})
