import { mount } from '@vue/test-utils'
import FvModalButton from './index'

const factory = () => {
  return mount(FvModalButton, {
    slots: {
      default: 'HelloWorld'
    }
  })
}

describe('FvModalButton', () => {
  it('should render a fv modal button', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=modal-button]').exists()).toBeTruthy()
  })
  it('should emit an event when button is clicked', () => {
    const wrapper = factory()
    const button = wrapper.find('[data-testid=modal-button]')
    button.vm.$emit('button:click')
    const clickedCalls = wrapper.emitted('button:click')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
  it('should render a slot', () => {
    const wrapper = factory()
    const modalButton = wrapper.find('[data-testid=modal-button]')
    expect(modalButton.text()).toBe('HelloWorld')
  })
})
