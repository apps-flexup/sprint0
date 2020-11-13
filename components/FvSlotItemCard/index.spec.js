import { mount } from '@vue/test-utils'
import FvSlotItemCard from './index.vue'

describe('FvSlotItemCard', () => {
  it('should render a slot item card', () => {
    const wrapper = mount(FvSlotItemCard)
    expect(wrapper.find('[data-testid="card"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="cardDiv"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="likeIcon"]').exists()).toBe(true)
  })
  it('should render default slot', () => {
    const defaultSlot = 'helloWorld'
    const wrapper = mount(FvSlotItemCard, {
      slots: {
        default: defaultSlot
      }
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
    expect(emitted[0][0]).toBe(true)
  })
  it('should emit an event when mouse leave', async () => {
    const wrapper = mount(FvSlotItemCard)
    const card = wrapper.find('[data-testid="card"]')
    card.trigger('mouseleave')
    await wrapper.vm.$nextTick()
    const emitted = wrapper.emitted('card:mouseover')
    expect(emitted).toBeTruthy()
    expect(emitted).toHaveLength(1)
    expect(emitted[0][0]).toBe(false)
  })
  it('should emit an event when card clicked', () => {
    const wrapper = mount(FvSlotItemCard)
    const card = wrapper.find('[data-testid="cardDiv"]')
    card.trigger('click')
    const emitted = wrapper.emitted('card:clicked')
    expect(emitted).toBeTruthy()
    expect(emitted).toHaveLength(1)
  })
  it('should emit an event when like icon clicked', () => {
    const wrapper = mount(FvSlotItemCard)
    const likeIcon = wrapper.find('[data-testid="likeIcon"]')
    likeIcon.vm.$emit('icon:clicked')
    const emitted = wrapper.emitted('like:clicked')
    expect(emitted).toBeTruthy()
    expect(emitted).toHaveLength(1)
  })
})
