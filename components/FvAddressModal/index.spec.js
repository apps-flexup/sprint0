import { shallowMount } from '@vue/test-utils'
import FvAddressModal from './index.vue'

const factory = (propsData) => {
  return shallowMount(FvAddressModal, {
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvAddressModal', () => {
  it('should render a fv address modal', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="modal"]').exists()).toBeTruthy()
  })
})
