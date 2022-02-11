import { mount } from '@vue/test-utils'
import FvThemeAutocomplete from './index.vue'

describe('FvThemeAutocomplete', () => {
  const theme = 'dark'
  const factory = () => {
    return mount(FvThemeAutocomplete, {
      stubs: {
        FvAutocomplete: true,
      },
      mocks: {
        $t: (msg) => msg,
      },
    })
  }
  it('should render a theme autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBeTruthy()
  })
  it('should emit an event when theme is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="autocomplete"]')
    autocomplete.vm.$emit('autocomplete:selected', theme)
    const submittedCalls = wrapper.emitted('theme:selected')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toBe(theme)
  })
})
