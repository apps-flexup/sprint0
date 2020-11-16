import { mount } from '@vue/test-utils'
import FvAccountCard from './index.vue'

describe('FvAccountCard', () => {
  it('should render a fv account card', () => {
    const wrapper = mount(FvAccountCard)
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="avatar"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="name"]').exists()).toBe(true)
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
    const expectedName = 'helloWorld'
    const wrapper = mount(FvAccountCard, {
      propsData: {
        name: expectedName
      }
    })
    const name = wrapper.find('[data-testid="name"]')
    expect(name.text()).toMatch(expectedName)
  })
  it('should emit an event when card is clicked', () => {
    const wrapper = mount(FvAccountCard)
    const card = wrapper.find('[data-testid="card"]')
    card.vm.$emit('card:clicked')
    const emitted = wrapper.emitted('accountCard:clicked')
    expect(emitted).toBeTruthy()
    expect(emitted).toHaveLength(1)
  })
  it('should emit an event when favorite is clicked', () => {
    const wrapper = mount(FvAccountCard)
    const card = wrapper.find('[data-testid="card"]')
    card.vm.$emit('favorite:clicked')
    const emitted = wrapper.emitted('accountCard:favorite')
    expect(emitted).toBeTruthy()
    expect(emitted).toHaveLength(1)
  })
})
