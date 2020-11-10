import { mount } from '@vue/test-utils'
import FvAccountCard from './index.vue'

describe('FvAccountCard', () => {
  it('should render a fv account card', () => {
    const wrapper = mount(FvAccountCard)
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="avatar"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="accountName"]').exists()).toBe(true)
  })
  it('should display avatar prop', () => {
    const img = '/images/avatar-1.png'
    const wrapper = mount(FvAccountCard, {
      propsData: {
        avatar: img
      }
    })
    const avatar = wrapper.find('[data-testid="avatar"]')
    expect(avatar.props().avatar).toMatch(img)
  })
  it('should display account name prop', () => {
    const name = 'helloWorld'
    const wrapper = mount(FvAccountCard, {
      propsData: {
        name
      }
    })
    const accountName = wrapper.find('[data-testid="accountName"]')
    expect(accountName.text()).toMatch(name)
  })
})
