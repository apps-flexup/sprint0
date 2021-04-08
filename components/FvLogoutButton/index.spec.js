import { mount } from '@vue/test-utils'
import FvLogoutButton from './index.vue'

const logoutFn = jest.fn()

const factory = () => {
  return mount(FvLogoutButton, {
    mocks: {
      $t: (msg) => msg,
      $auth: {
        logout: logoutFn
      }
    }
  })
}

describe('FvLogoutButton', () => {
  it('should render a fv logout button', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="button"]').exists()).toBe(true)
  })
  it('should logout with keycloak when button is clicked', () => {
    const wrapper = factory()
    const button = wrapper.find('[data-testid="button"]')
    button.vm.$emit('click')
    expect(logoutFn).toHaveBeenCalledTimes(1)
  })
})
