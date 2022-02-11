import { mount } from '@vue/test-utils'
import FvDeleteAction from './index.vue'

const factory = () => {
  return mount(FvDeleteAction)
}

describe('FvDeleteAction', () => {
  it('should render a fv delete action', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=deleteIcon]').exists()).toBeTruthy()
  })
  it('should emit an event when clicked', () => {
    const wrapper = factory()
    const deleteIcon = wrapper.find('[data-testid=deleteIcon]')
    deleteIcon.trigger('click')
    const clickedCalls = wrapper.emitted('delete:clicked')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
})
