import { mount } from '@vue/test-utils'
import FvModalButton from './index'

const factory = () => {
  return mount(FvModalButton, {
    slots: {
      icon: 'HelloWorld'
    },
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvModalButton', () => {
  it('should render a fv close modal button', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=button]').exists()).toBe(true)
  })
  it('should emit an event when button is clicked', () => {
    const wrapper = factory()
    const button = wrapper.find('[data-testid=button]')
    button.trigger('click')
    const clickedCalls = wrapper.emitted('button:click')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
  it('should render icon slot', () => {
    const wrapper = factory()
    const slotIcon = wrapper.find('[data-testid=slot-icon]')
    expect(slotIcon.text()).toBe('HelloWorld')
  })
})
