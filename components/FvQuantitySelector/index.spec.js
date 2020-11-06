import { mount } from '@vue/test-utils'
import FvQuantitySelector from './index.vue'

describe('FvQuantitySelector', () => {
  it('should render a quantity selector', () => {
    const wrapper = mount(FvQuantitySelector)
    expect(wrapper.find('[data-testid="quantitySelector"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="buttonMinus"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="buttonPlus"]').exists()).toBe(true)
  })
  it('should display a quantity of 1 by default', () => {
    const wrapper = mount(FvQuantitySelector)
    const textField = wrapper.find('[data-testid="quantitySelector"]')
    expect(textField).toMatch('1')
  })
})
