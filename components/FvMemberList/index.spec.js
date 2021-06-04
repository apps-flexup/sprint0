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
    expect(wrapper.find('[data-testid="table"]').exists()).toBe(true)
  })
  it('should emit an event when member is selected', () => {
    const wrapper = factory()
    const table = wrapper.find('[data-testid="table"]')
    table.vm.$emit('list:selected')
    const selectedCalls = wrapper.emitted('list:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
})
