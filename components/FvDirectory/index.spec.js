import { shallowMount } from '@vue/test-utils'
import FvDirectory from './index'

const factory = () => {
  return shallowMount(FvDirectory, {
    mocks: {
      $t: (msg) => msg,
    },
  })
}

describe('FvDirectory', () => {
  it('should render a fv directory', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBe(true)
  })
})
