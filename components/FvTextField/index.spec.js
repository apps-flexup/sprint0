import { mount } from '@vue/test-utils'
import FvTextField from './index.vue'

describe('FvTextField', () => {
  it('should render a text field', () => {
    const wrapper = mount(FvTextField)
    expect(wrapper.find('[data-testid="textField"]').exists()).toBe(true)
  })
  it('should emit an event when click', () => {
    const wrapper = mount(FvTextField)
    const textField = wrapper.find('[data-testid="textField"]')
    textField.trigger('click')
    const submittedCalls = wrapper.emitted('click')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should display empty string by default', () => {
    const wrapper = mount(FvTextField)
    const textField = wrapper.find('[data-testid="textField"]')
    expect(textField.text()).toMatch('')
  })
  it('should emit an event when input changed', async () => {
    const text = 'helloWorld'
    const wrapper = mount(FvTextField)
    const textField = wrapper.find('[data-testid="textField"]')
    await textField.setValue(text)
    const inputCalls = wrapper.emitted('input')
    expect(inputCalls).toHaveLength(1)
    expect(inputCalls[0][0]).toMatch(text)
  })
})
