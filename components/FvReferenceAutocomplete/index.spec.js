import { shallowMount } from '@vue/test-utils'
import FvReferenceAutocomplete from './index.vue'

const factory = (propsData) => {
  return shallowMount(FvReferenceAutocomplete, {
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvReferenceAutocomplete', () => {
  it('should render a fv reference autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
  })
  it('should emit an event when a reference is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="autocomplete"]')
    const reference = 'reference1'
    autocomplete.vm.$emit('autocomplete:selected', reference)
    const selectedCalls = wrapper.emitted('reference:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toEqual(reference)
  })
})
