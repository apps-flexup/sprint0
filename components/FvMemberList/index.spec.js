import { shallowMount } from '@vue/test-utils'
import FvMemberList from './index.vue'

const factory = () => {
  return shallowMount(FvMemberList, {
    mocks: {
      $t: (msg) => msg
    }
  })
}


describe('FvMemberIndex', () => {
  it('should render a fv member list', () => {
    const wrapper = factory()
    expect(false).toBe(true)
  })
})
