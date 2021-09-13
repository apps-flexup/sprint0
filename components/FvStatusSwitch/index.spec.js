import { shallowMount } from '@vue/test-utils'
import FvStatusSwitch from './index'

const factory = (propsData) => {
  return shallowMount(FvStatusSwitch, {
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvStatusSwitch', () => {
  it('should render a fv status switch', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=switch]').exists()).toBe(true)
  })
  it.each([
    ['active', 'inactive'],
    ['inactive', 'active']
  ])(
    'should emit an event with %s when user click and status was %s',
    (status, expectedStatus) => {
      const wrapper = factory({ value: status })
      const switchBtn = wrapper.find('[data-testid=switch]')
      switchBtn.vm.$emit('change')
      const statusChange = wrapper.emitted('status:changed')
      expect(statusChange).toBeTruthy()
      expect(statusChange).toHaveLength(1)
      expect(statusChange[0][0]).toBe(expectedStatus)
    }
  )
})
