import { mount } from '@vue/test-utils'
import FvFormeJuridique from './index.vue'

describe('FvFormeJuridique', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(FvFormeJuridique)
    expect(wrapper.vm).toBeTruthy()
  })
})
