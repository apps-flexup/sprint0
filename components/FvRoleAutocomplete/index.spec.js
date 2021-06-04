import { shallowMount } from '@vue/test-utils'
import FvRoleAutocomplete from './index'

const factory = () => {
  return shallowMount(FvRoleAutocomplete)
}

describe('FvRoleAutocomplete', () => {
  it('should render a fv user autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBe(true)
  })
})
