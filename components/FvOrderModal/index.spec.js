import { shallowMount } from '@vue/test-utils'
import FvOrderModal from './index.vue'

const factory = () => {
  return shallowMount(FvOrderModal, {
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvOrderModal', () => {
  it('should render a fv order modal', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="modal"]').exists()).toBe(true)
  })
})
