import { mount } from '@vue/test-utils'
import FvIcon from './index.vue'

const factory = (propsData) => {
  return mount(FvIcon, {
    propsData: {
      ...propsData,
    },
  })
}

describe('FvIcon', () => {
  it('should render a fv icon', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=icon]').exists()).toBeTruthy()
  })
  it('should emit an event when clicked', () => {
    const wrapper = factory()
    const icon = wrapper.find('[data-testid=icon]')
    icon.trigger('click')
    const clickedCalls = wrapper.emitted('icon:clicked')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
  it('should have a medium default size', () => {
    const wrapper = factory()
    expect(wrapper.vm.xSmall).toBeFalsy()
    expect(wrapper.vm.small).toBeFalsy()
    expect(wrapper.vm.large).toBeFalsy()
    expect(wrapper.vm.xLarge).toBeFalsy()
  })
  it("should have a xSmall size if size is 'xSmall'", () => {
    const size = 'xSmall'
    const wrapper = factory({ size })
    expect(wrapper.vm.xSmall).toBeTruthy()
    expect(wrapper.vm.small).toBeFalsy()
    expect(wrapper.vm.large).toBeFalsy()
    expect(wrapper.vm.xLarge).toBeFalsy()
  })
  it("should have a small size if size is 'small'", () => {
    const size = 'small'
    const wrapper = factory({ size })
    expect(wrapper.vm.xSmall).toBeFalsy()
    expect(wrapper.vm.small).toBeTruthy()
    expect(wrapper.vm.large).toBeFalsy()
    expect(wrapper.vm.xLarge).toBeFalsy()
  })
  it("should have a large size if size is 'large'", () => {
    const size = 'large'
    const wrapper = factory({ size })
    expect(wrapper.vm.xSmall).toBeFalsy()
    expect(wrapper.vm.small).toBeFalsy()
    expect(wrapper.vm.large).toBeTruthy()
    expect(wrapper.vm.xLarge).toBeFalsy()
  })
  it("should have a xLarge size if size is 'xLarge'", () => {
    const size = 'xLarge'
    const wrapper = factory({ size })
    expect(wrapper.vm.xSmall).toBeFalsy()
    expect(wrapper.vm.small).toBeFalsy()
    expect(wrapper.vm.large).toBeFalsy()
    expect(wrapper.vm.xLarge).toBeTruthy()
  })
})
