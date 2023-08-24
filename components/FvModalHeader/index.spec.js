import { shallowMount } from '@vue/test-utils'
import FvModalHeader from './index.vue'

const factory = () => {
  return shallowMount(FvModalHeader, {
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvModalHeader', () => {
  it('should render a fv modal header', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="title"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="closeButton"]').exists()).toBeTruthy()
  })
  it('should emit an event when close button is clicked', () => {
    const wrapper = factory()
    const closeButton = wrapper.find('[data-testid="closeButton"]')
    closeButton.vm.$emit('click')
    const closeCalls = wrapper.emitted('modal:header:close')
    expect(closeCalls).toBeTruthy()
    expect(closeCalls.length).toBe(1)
  })
})
