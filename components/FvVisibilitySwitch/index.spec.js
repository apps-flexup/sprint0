import { shallowMount } from '@vue/test-utils'
import FvVisibilitySwitch from './index'

const factory = (propsData) => {
  return shallowMount(FvVisibilitySwitch, {
    propsData: {
      ...propsData,
    },
    mocks: {
      $t: (msg) => msg,
    },
  })
}

describe('FvVisibilitySwitch', () => {
  it('should render a fv visibility switch', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=switch]').exists()).toBe(true)
  })
  it.each([
    ['private', 'public'],
    ['public', 'private'],
  ])('should emit an event with %s when user click and visibility was %s', (visibility, expectedVisibility) => {
    const wrapper = factory({ value: visibility })
    const switchBtn = wrapper.find('[data-testid=switch]')
    switchBtn.vm.$emit('change')
    const visibilityChange = wrapper.emitted('visibility:changed')
    expect(visibilityChange).toBeTruthy()
    expect(visibilityChange).toHaveLength(1)
    expect(visibilityChange[0][0]).toBe(expectedVisibility)
  })
})
