import { mount } from '@vue/test-utils'
import FvStatus from './index.vue'

const factory = (propsData) => {
  return mount(FvStatus, {
    propsData: {
      ...propsData
    },
    slots: {
      icon: 'plop'
    },
    mocks: {
      $t: (msg) => {
        return msg
      }
    }
  })
}

describe('FvStatus', () => {
  it('should render a status btn', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="statusBtn"').exists()).toBe(true)
  })
  it('should emit an event when clicked', () => {
    const wrapper = factory()
    const statusBtn = wrapper.find('[data-testid="statusBtn"')
    statusBtn.vm.$emit('click')
    const statusChangedCalls = wrapper.emitted('status:clicked')
    expect(statusChangedCalls).toBeTruthy()
    expect(statusChangedCalls).toHaveLength(1)
  })
  it('should return the color of the status', () => {
    const wrapper = factory({ status: 'inactive' })
    expect(wrapper.vm.color).toBe('#FFCD92')
  })
})
