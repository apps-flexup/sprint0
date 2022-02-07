import { shallowMount } from '@vue/test-utils'
import FvAccountAutocomplete from './index'

const factory = () => {
  return shallowMount(FvAccountAutocomplete)
}

describe('FvAccountAutocomplete', () => {
  it('should render a fv account autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBe(true)
  })
  it('should emit an event when account is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid=autocomplete]')
    const selectedAccount = {
      name: 'Toto',
      firstname: 'toto',
      lastname: 'La Riflette ',
      type: 'Personal',
    }
    autocomplete.vm.$emit('autocomplete:selected', selectedAccount)
    const selectedCalls = wrapper.emitted('account:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(selectedAccount)
  })
})
