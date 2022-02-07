import { shallowMount } from '@vue/test-utils'
import FvHeaderIndex from './index.vue'

const factory = (propsData) => {
  return shallowMount(FvHeaderIndex, {
    propsData: {
      ...propsData,
    },
  })
}

describe('FvHeaderIndex', () => {
  it('should render a fv header index', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="title"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="createButton"]').exists()).toBe(true)
  })
  it('should display the title', () => {
    const wrapper = factory({ title: 'plop' })
    const title = wrapper.find('[data-testid="title"]')
    expect(title.text()).toBe('plop')
  })
  it('should display the title button', () => {
    const wrapper = factory({ titleButton: 'create plop' })
    const title = wrapper.find('[data-testid="createButton"]')
    expect(title.text()).toBe('create plop')
  })
  it('should not display the button when condition is false', () => {
    const wrapper = factory({ canCreate: false })
    expect(wrapper.find('[data-testid="createButton"]').exists()).toBe(false)
  })
  it('should send an event when button is clicked', () => {
    const wrapper = factory()
    const createButton = wrapper.find('[data-testid="createButton"]')
    createButton.vm.$emit('button:click')
    const buttonClickCalls = wrapper.emitted('button:click')
    expect(buttonClickCalls).toBeTruthy()
    expect(buttonClickCalls).toHaveLength(1)
  })
})
