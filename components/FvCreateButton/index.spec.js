import { shallowMount } from '@vue/test-utils'
import FvCreateButton from './index.vue'

const factory = (propsData) => {
  return shallowMount(FvCreateButton, {
    propsData: {
      ...propsData
    }
  })
}

describe('FvCreateButton', () => {
  it('should render a fv header index', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="createButton"]').exists()).toBe(true)
  })
  it('should display the title button', () => {
    const wrapper = factory({ titleButton: 'create plop' })
    const title = wrapper.find('[data-testid="createButton"]')
    expect(title.text()).toBe('create plop')
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
