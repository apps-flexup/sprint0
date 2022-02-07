import { mount } from '@vue/test-utils'
import FvLoginButton from './index.vue'

const loginFn = jest.fn()

const factory = () => {
  return mount(FvLoginButton, {
    mocks: {
      $t: (msg) => msg,
      $auth: {
        loginWith: loginFn,
      },
    },
  })
}

describe('FvLoginButton', () => {
  it('should render a fv login button', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="button"]').exists()).toBe(true)
  })
  it('should login with keycloak when button is clicked', () => {
    const wrapper = factory()
    const button = wrapper.find('[data-testid="button"]')
    button.vm.$emit('click')
    expect(loginFn).toHaveBeenCalledTimes(1)
    expect(loginFn).toHaveBeenCalledWith('keycloak')
  })
})
