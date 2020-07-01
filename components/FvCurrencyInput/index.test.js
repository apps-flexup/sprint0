import { mount } from '@vue/test-utils'
import FvCurrencyInput from './index.vue'

describe('FvCurrencyInput', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FvCurrencyInput)
    expect(wrapper.vm).toBeTruthy()
  })
})
