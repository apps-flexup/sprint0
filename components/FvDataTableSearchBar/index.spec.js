import { shallowMount } from '@vue/test-utils'
import FvDataTableSearchBar from './index.vue'

const factory = () => {
  return shallowMount(FvDataTableSearchBar)
}

describe('FvDataTableSearchBar', () => {
  it('should render a fv data table header', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=textField]').exists()).toBeTruthy()
  })
  it('should emit an event when the input changed', () => {
    const wrapper = factory()
    const textField = wrapper.find('[data-testid=textField]')
    const currentSearch = 'search'
    textField.vm.$emit('input', currentSearch)
    const changedCalls = wrapper.emitted('dataTableSearchBar:changed')
    expect(changedCalls).toBeTruthy()
    expect(changedCalls).toHaveLength(1)
    expect(changedCalls[0][0]).toBe(currentSearch)
  })
  it('should emit an event when enter key is pressed', async () => {
    const wrapper = factory()
    const textField = wrapper.find('[data-testid=textField]')
    const currentSearch = 'search'
    await wrapper.setData({ search: currentSearch })
    textField.vm.$emit('enterPressed')
    const changedCalls = wrapper.emitted('dataTableSearchBar:filterValidated')
    expect(changedCalls).toBeTruthy()
    expect(changedCalls).toHaveLength(1)
    expect(changedCalls[0][0]).toBe(currentSearch)
  })
  it('should reset search when enter key is pressed', async () => {
    const wrapper = factory()
    const textField = wrapper.find('[data-testid=textField]')
    const currentSearch = 'search'
    await wrapper.setData({ search: currentSearch })
    textField.vm.$emit('enterPressed')
    expect(wrapper.vm.search).toBe(null)
  })
})
