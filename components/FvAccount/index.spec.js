import { mount } from '@vue/test-utils'
import FvAccount from './index.vue'

describe('FvAccount', () => {
  it('should render an avatar and display account name', () => {
    const wrapper = mount(FvAccount)
    const avatar = wrapper.find('[data-testid="avatar"]')
    expect(avatar.exists()).toBe(true)
    const accountName = wrapper.find('[data-testid="accountName"]')
    expect(accountName.exists()).toBe(true)
  })
})
