import { mount } from '@vue/test-utils'
import FvTextButton from './index'

const factory = () => {
  return mount(FvTextButton, {
    propsData: {
      text: 'HelloWorld'
    },
    slots: {
      icon: 'mdi-plus',
      text: 'HelloWorld'
    }
  })
}

describe('FvTextButton', () => {
  it('should render a fv text button', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=button]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid=slot-icon]').exists()).toBeTruthy()
  })
  it('should emit an event when button is clicked', () => {
    const wrapper = factory()
    const button = wrapper.find('[data-testid=button]')
    button.trigger('click')
    const clickedCalls = wrapper.emitted('button:click')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
  it('should have a slot icon', () => {
    const wrapper = factory()
    const slotIcon = wrapper.find('[data-testid=slot-icon]')
    expect(slotIcon.text()).toBe('mdi-plus')
  })
  it('should have a slot text in button', () => {
    const wrapper = factory()
    const button = wrapper.find('[data-testid=button]')
    expect(button.text()).toBe('HelloWorld')
  })
})
