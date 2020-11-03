import { createLocalVue, mount } from '@vue/test-utils'
import vuetify from 'vuetify'
import FvPrimaryButton from './index.vue'

describe('FvPrimaryButton', () => {
  let localVue
  beforeEach(() => {
    localVue = createLocalVue()
    localVue.use(vuetify)
  })
  it('should render a button', () => {
    const wrapper = mount(FvPrimaryButton, {
      localVue
    })
    expect(wrapper.contains('[data-testid="button"]')).toBe(true)
  })
  it('should render default slot text when passed', () => {
    const message = 'HelloWorld'
    const wrapper = mount(FvPrimaryButton, {
      localVue,
      slots: {
        default: message
      }
    })
    const button = wrapper.find('[data-testid="button"]')
    expect(button.text()).toMatch(message)
  })
  it('should emits an event when clicked', () => {
    const wrapper = mount(FvPrimaryButton, {
      localVue
    })
    const button = wrapper.find('[data-testid="button"]')
    button.trigger('click')
    const buttonSubmittedCalls = wrapper.emitted('button:click')
    expect(buttonSubmittedCalls).toHaveLength(1)
  })
})
