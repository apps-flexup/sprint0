import { shallowMount } from '@vue/test-utils'
import FvNavBarBuyer from './index.vue'

describe('FvNavBarBuyer', () => {
  it('should render a nav bar buyer', () => {
    const wrapper = shallowMount(FvNavBarBuyer)
    expect(wrapper.find('[data-testid="navBar"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="search"]').exists()).toBe(true)
    expect(wrapper.findAll('[data-testid="icons"]').length).toBe(3)
  })
})
