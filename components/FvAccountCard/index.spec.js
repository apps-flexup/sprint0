import { mount } from '@vue/test-utils'
import FvAccountCard from './index.vue'

describe('FvAccountCard', () => {
  it('should render a fv account card', () => {
    const wrapper = mount(FvAccountCard, {
      propsData: {
        id: 1
      }
    })
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="avatar"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="name"]').exists()).toBe(true)
  })
  it('should display avatar prop', () => {
    const img = '/images/avatar-1.png'
    const wrapper = mount(FvAccountCard, {
      propsData: {
        id: 1,
        avatar: img
      }
    })
    const avatar = wrapper.find('[data-testid="avatar"]')
    expect(avatar.props().avatar).toBe(img)
  })
  it('should display account name prop', () => {
    const expectedName = 'helloWorld'
    const wrapper = mount(FvAccountCard, {
      propsData: {
        id: 1,
        name: expectedName
      }
    })
    const name = wrapper.find('[data-testid="name"]')
    expect(name.text()).toBe(expectedName)
  })
})
