import { mount } from '@vue/test-utils'
import FvPrimaryButton from './index.vue'

describe('FvPrimaryButton', () => {
  it('should render a button', () => {
    const wrapper = mount(FvPrimaryButton)
    expect(wrapper.find('[data-testid="button"]').exists()).toBe(true)
  })
  it('should render default slot text when passed', () => {
    const message = 'HelloWorld'
    const wrapper = mount(FvPrimaryButton, {
      slots: {
        default: message,
      },
    })
    const button = wrapper.find('[data-testid="button"]')
    expect(button.text()).toMatch(message)
  })
  it('should emits an event when clicked', () => {
    const wrapper = mount(FvPrimaryButton)
    const button = wrapper.find('[data-testid="button"]')
    button.trigger('click')
    const buttonSubmittedCalls = wrapper.emitted('button:click')
    expect(buttonSubmittedCalls).toHaveLength(1)
  })
})
