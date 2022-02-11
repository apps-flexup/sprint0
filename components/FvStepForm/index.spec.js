import { mount } from '@vue/test-utils'
import FvStepForm from './index.vue'

describe('FvStepForm', () => {
  it('should render a title, a index and a slot of a form', () => {
    const wrapper = mount(FvStepForm)
    expect(wrapper.find('[data-testid="formId"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="formTitle"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="formSlot"]').exists()).toBeTruthy()
  })
  it('should show the number of props formId', () => {
    const wrapper = mount(FvStepForm, {
      propsData: {
        formId: 1,
      },
    })
    const index = wrapper.find('[data-testid="formId"]')
    expect(index.text()).toBe('1')
  })
  it('should show the title of props title', () => {
    const wrapper = mount(FvStepForm, {
      propsData: {
        title: 'title slot',
      },
    })
    const title = wrapper.find('[data-testid="formTitle"]')
    expect(title.text()).toBe('title slot')
  })
  it('should show the contain of slot form', () => {
    const wrapper = mount(FvStepForm, {
      slots: {
        form: 'slot form',
      },
    })
    const slot = wrapper.find('[data-testid="formSlot"]')
    expect(slot.text()).toBe('slot form')
  })
})
