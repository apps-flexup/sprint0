import { mount } from '@vue/test-utils'
import FvSecondaryButton from './index.vue'

describe('FvSecondaryButton', () => {
  it('should render a fv secondary button', () => {
    const wrapper = mount(FvSecondaryButton)
    expect(wrapper.find('[data-testid="button"]').exists()).toBe(true)
  })
  it('should use default slot as button text', () => {
    const text = 'HelloWorld'
    const wrapper = mount(FvSecondaryButton, {
      slots: {
        default: text
      }
    })
    const button = wrapper.find('[data-testid="button"]')
    expect(button.text()).toMatch(text)
  })
  it('should emit an event when click on button', () => {
    const wrapper = mount(FvSecondaryButton)
    const button = wrapper.find('[data-testid="button"]')
    button.trigger('click')
    const clickedCalls = wrapper.emitted('button:click')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
})
