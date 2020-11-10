import { mount } from '@vue/test-utils'
import FvAccountCard from './index.vue'

describe('FvAccountCard', () => {
  it('should render a fv account card', () => {
    const wrapper = mount(FvAccountCard)
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="avatar"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="accountName"]').exists()).toBe(true)
  })
})
