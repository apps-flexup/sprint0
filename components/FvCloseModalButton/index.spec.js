import { mount } from '@vue/test-utils'
import FvCloseModalButton from './index'

const factory = () => {
  return mount(FvCloseModalButton, {
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvCloseModalButton', () => {
  it('should render a fv close modal button', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=button]').exists()).toBe(true)
  })
  it('should emit an event when button is clicked', () => {
    const wrapper = factory()
    const button = wrapper.find('[data-testid=button]')
    button.trigger('click')
    const clickedCalls = wrapper.emitted('button:close')
    expect(clickedCalls).toBeTruthy()
    expect(clickedCalls).toHaveLength(1)
  })
})
