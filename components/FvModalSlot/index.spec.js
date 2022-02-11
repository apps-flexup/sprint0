import { mount } from '@vue/test-utils'
import FvModalSlot from './index'

describe('FvModalSlot', () => {
  it('should render a fv modal slot', () => {
    const wrapper = mount(FvModalSlot)
    expect(wrapper.find('[data-testid=modal]').exists()).toBeTruthy()
  })
})
