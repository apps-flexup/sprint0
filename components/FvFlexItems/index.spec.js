import { mount } from '@vue/test-utils'
import FvFlexItems from './index.vue'

describe('FvFlexItems', () => {
  it('should render a fv flex items', () => {
    const wrapper = mount(FvFlexItems)
    expect(wrapper.find('[data-testid="div"]').exists()).toBeTruthy()
  })
  it('should render left slot', () => {
    const slot = 'HelloWorld'
    const wrapper = mount(FvFlexItems, {
      slots: {
        left: slot,
      },
    })
    const div = wrapper.find('[data-testid="div"]')
    expect(div.text()).toBe(slot)
  })
  it('should render separator slot', () => {
    const slot = 'HelloWorld'
    const wrapper = mount(FvFlexItems, {
      slots: {
        separator: slot,
      },
    })
    const div = wrapper.find('[data-testid="div"]')
    expect(div.text()).toBe(slot)
  })
  it('should render right slot', () => {
    const slot = 'HelloWorld'
    const wrapper = mount(FvFlexItems, {
      slots: {
        right: slot,
      },
    })
    const div = wrapper.find('[data-testid="div"]')
    expect(div.text()).toBe(slot)
  })
})
