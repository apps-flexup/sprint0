import { mount } from '@vue/test-utils'
import FvEditAction from './index.vue'

const factory = () => {
  return mount(FvEditAction)
}

describe('FvEditAction', () => {
  it('should render a fv delete action', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=editIcon]').exists()).toBe(true)
  })
  it('should emit an event when clicked', () => {
    const wrapper = factory()
    const editIcon = wrapper.find('[data-testid=editIcon]')
    editIcon.trigger('click')
    const clickedCalls = wrapper.emitted('edit:clicked')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
})
