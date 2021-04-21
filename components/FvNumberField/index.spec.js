import { shallowMount } from '@vue/test-utils'
import FvNumberField from './index.vue'

describe('FvNumberField', () => {
  it('should render a fv number field', () => {
    const wrapper = shallowMount(FvNumberField)
    expect(wrapper.find('[data-testid="numberField"]').exists()).toBe(true)
  })
  it('should emit an event when click inside', () => {
    const wrapper = shallowMount(FvNumberField)
    const numberField = wrapper.find('[data-testid="numberField"]')
    numberField.vm.$emit('click')
    const clickedCalls = wrapper.emitted('click')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
  it('should emit an event when click outside', () => {
    const wrapper = shallowMount(FvNumberField)
    const numberField = wrapper.find('[data-testid="numberField"]')
    numberField.vm.$emit('click:outside')
    const clickedCalls = wrapper.emitted('click:outside')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
  it('should emit an event when value change', () => {
    const wrapper = shallowMount(FvNumberField)
    const numberField = wrapper.find('[data-testid="numberField"]')
    const input = 42
    numberField.vm.$emit('input', input)
    const inputCalls = wrapper.emitted('input')
    expect(inputCalls).toBeTruthy()
    expect(inputCalls).toHaveLength(1)
    expect(inputCalls[0][0]).toBe(input)
  })
})
