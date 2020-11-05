import { mount } from '@vue/test-utils'
import FvQuantitySelector from './index.vue'

describe('FvQuantitySelector', () => {
  it('should render a quantity selector', () => {
    const wrapper = mount(FvQuantitySelector)
    expect(wrapper.find('[data-testid="quantitySelector"]').exists()).toBe(true)
  })
})
