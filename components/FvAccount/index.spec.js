import { mount } from '@vue/test-utils'
import FvAccount from './index.vue'

describe('FvAccount', () => {
  it('should render an avatar and display account name', () => {
    const wrapper = mount(FvAccount)
    const avatar = wrapper.find('[data-testid="avatar"]')
    expect(avatar.exists()).toBeTruthy()
    const accountName = wrapper.find('[data-testid="accountName"]')
    expect(accountName.exists()).toBeTruthy()
  })
  it('should displayed account name', () => {
    const name = 'toto'
    const wrapper = mount(FvAccount, {
      propsData: {
        name,
      },
    })
    const accountName = wrapper.find('[data-testid="accountName"]')
    expect(accountName.text()).toBe(name)
  })
})
