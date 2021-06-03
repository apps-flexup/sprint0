import { shallowMount } from '@vue/test-utils'
import FvMemberIndex from './index.vue'

const factory = () => {
  return shallowMount(FvMemberIndex, {
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvMembersIndex', () => {
  test('should render a fv member index', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="inviteMemberButton"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-testid="memberList"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="inviteMemberModal"]').exists()).toBe(
      true
    )
  })
})
