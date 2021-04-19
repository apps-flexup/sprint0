import { mount } from '@vue/test-utils'
import FvPriceWithUnit from './index.vue'

describe('FvPriceWithUnit', () => {
  it('should render a price with unit', () => {
    const wrapper = mount(FvPriceWithUnit)
    expect(wrapper.find('[data-testid="price"]').exists()).toBe(true)
  })
})
