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
  // it('should get all countries from the store', () => {
  //   const wrapper = factory()
  //   expect(wrapper.vm.items).toEqual(countries)
  // })
  // it('should emit an event when category is selected', () => {
  //   const wrapper = factory()
  //   const autocomplete = wrapper.find('[data-testid=autocomplete]')
  //   const selectedCategory = countries[0]
  //   autocomplete.vm.$emit('autocomplete:selected', selectedCategory)
  //   const selectedCalls = wrapper.emitted('country:selected')
  //   expect(selectedCalls).toBeTruthy()
  //   expect(selectedCalls).toHaveLength(1)
  //   expect(selectedCalls[0][0]).toBe(selectedCategory)
  // })
})
