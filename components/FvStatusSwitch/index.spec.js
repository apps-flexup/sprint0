import { shallowMount } from '@vue/test-utils'
import FvStatusSwitch from './index'

const factory = (propsData) => {
  return shallowMount(FvStatusSwitch, {
    propsData: {
      ...propsData,
    },
    mocks: {
      $t: (msg) => msg,
    },
  })
}

describe('FvStatusSwitch', () => {
  it('should render a fv status switch', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=switch]').exists()).toBeTruthy()
  })
  describe.each([
    ['active', 'inactive'],
    ['inactive', 'active'],
  ])('When %s, emit an event with %s', (value, expectedValue) => {
    let wrapper
    let switchBtn
    beforeEach(() => {
      wrapper = factory({ value })
      switchBtn = wrapper.find('[data-testid=switch]')
      switchBtn.vm.$emit('change')
    })
    it('specific', () => {
      const statusChange = wrapper.emitted('status:changed')
      expectStatusEventToBe(statusChange, expectedValue)
    })
    it('generic', () => {
      const statusChange = wrapper.emitted('payload:changed')
      expectStatusEventToBe(statusChange, expectedValue)
    })
    const expectStatusEventToBe = (event, expectedValue) => {
      expect(event).toBeTruthy()
      expect(event).toHaveLength(1)
      expect(event[0][0]).toBe(expectedValue)
    }
  })
})
