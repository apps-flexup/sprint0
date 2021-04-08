import { mount } from '@vue/test-utils'
import FvVatField from './index.vue'

describe('FvVatField', () => {
  it('should render a vat field', () => {
    const wrapper = mount(FvVatField)
    expect(wrapper.find('[data-testid="vatField"]').exists()).toBe(true)
  })
})
