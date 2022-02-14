import { mount } from '@vue/test-utils'
import FvSlotItemCard from './index.vue'

describe('FvSlotItemCard', () => {
  it('should render a slot item card', () => {
    const wrapper = mount(FvSlotItemCard)
    expect(wrapper.find('[data-testid="card"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="cardDiv"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="favoriteIcon"]').exists()).toBeTruthy()
  })
  it('should render default slot', () => {
    const defaultSlot = 'helloWorld'
    const wrapper = mount(FvSlotItemCard, {
      slots: {
        default: defaultSlot,
      },
    })
    expect(wrapper.html()).toContain(defaultSlot)
  })
  it('should emit an event when mouse over', async () => {
    const wrapper = mount(FvSlotItemCard)
    const card = wrapper.find('[data-testid="card"]')
    card.trigger('mouseover')
    await wrapper.vm.$nextTick()
    const emitted = wrapper.emitted('card:mouseover')
    expect(emitted).toBeTruthy()
    expect(emitted).toHaveLength(1)
    expect(emitted[0][0]).toBeTruthy()
  })
  it('should emit an event when mouse leave', async () => {
    const wrapper = mount(FvSlotItemCard)
    const card = wrapper.find('[data-testid="card"]')
    card.trigger('mouseleave')
    await wrapper.vm.$nextTick()
    const emitted = wrapper.emitted('card:mouseover')
    expect(emitted).toBeTruthy()
    expect(emitted).toHaveLength(1)
    expect(emitted[0][0]).toBeFalsy()
  })
  it('should emit an event when card clicked', () => {
    const wrapper = mount(FvSlotItemCard)
    const card = wrapper.find('[data-testid="cardDiv"]')
    card.trigger('click')
    const emitted = wrapper.emitted('card:clicked')
    expect(emitted).toBeTruthy()
    expect(emitted).toHaveLength(1)
  })
  it('should emit an event when favorite icon clicked', () => {
    const wrapper = mount(FvSlotItemCard)
    const favoriteIcon = wrapper.find('[data-testid="favoriteIcon"]')
    favoriteIcon.vm.$emit('icon:clicked')
    const emitted = wrapper.emitted('favorite:clicked')
    expect(emitted).toBeTruthy()
    expect(emitted).toHaveLength(1)
  })
  it('should display favorite icon to black by default', () => {
    const wrapper = mount(FvSlotItemCard)
    const favoriteIcon = wrapper.find('[data-testid="favoriteIcon"]')
    expect(favoriteIcon.props().color).toBe('black')
  })
  it('should display favorite icon to color prop', () => {
    const color = '#FFFFFF'
    const wrapper = mount(FvSlotItemCard, {
      propsData: {
        favoriteIconColor: color,
      },
    })
    const favoriteIcon = wrapper.find('[data-testid="favoriteIcon"]')
    expect(favoriteIcon.props().color).toBe(color)
  })
})
