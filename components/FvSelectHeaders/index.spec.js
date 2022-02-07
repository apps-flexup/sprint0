import { shallowMount } from '@vue/test-utils'
import FvSelectHeaders from './index.vue'

describe('FvSelectHeaders', () => {
  const factory = () => {
    return shallowMount(FvSelectHeaders, {
      propsData: {
        dialog: true,
      },
    })
  }
  it('should render a fv select headers', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="modal"]').exists()).toBe(true)
  })
})
