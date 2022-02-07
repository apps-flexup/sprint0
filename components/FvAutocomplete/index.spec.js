import { mount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import FvAutocomplete from './index'

let vuetify

const factory = () => {
  return mount(FvAutocomplete, {
    vuetify,
  })
}

beforeEach(() => {
  vuetify = new Vuetify()
})

describe('FvAutocomplete', () => {
  it('should render a fv autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
  })
  it('should emit an event when element is selected', () => {
    const value = 'testValue'
    const wrapper = factory()
    wrapper.vm.model = value
    const selectedCalls = wrapper.emitted('autocomplete:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(value)
  })
})
