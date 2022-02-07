import { shallowMount } from '@vue/test-utils'
import FvModalActions from './index'

const factory = () => {
  return shallowMount(FvModalActions, {
    mocks: {
      $t: (msg) => msg,
    },
  })
}

describe('FvModalActions', () => {
  it('should render a fv modal action', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="closeButton"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="saveButton"]').exists()).toBe(true)
  })
  it('should emit an event when clicked on close button', () => {
    const wrapper = factory()
    const closeButton = wrapper.find('[data-testid="closeButton"]')
    closeButton.vm.$emit('button:click')
    const clickedCalls = wrapper.emitted('modal:actions:close')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
  it('should emit an event when clicked on save button', () => {
    const wrapper = factory()
    const saveButton = wrapper.find('[data-testid="saveButton"]')
    saveButton.vm.$emit('button:click')
    const clickedCalls = wrapper.emitted('modal:actions:save')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
})
