import { shallowMount } from '@vue/test-utils'
import FvUserAutocomplete from './index'

const factory = () => {
  return shallowMount(FvUserAutocomplete)
}

describe('FvUserAutocomplete', () => {
  it('should render a fv user autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBe(true)
  })
})
