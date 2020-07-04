import { mount } from '@vue/test-utils'
import FvUnitInput from './index.vue'

describe('FvUnitInput', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FvUnitInput)
    expect(wrapper.vm).toBeTruthy()
  })
})
