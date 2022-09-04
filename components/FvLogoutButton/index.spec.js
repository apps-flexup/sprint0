import { mount } from '@vue/test-utils'
import FvLogoutButton from './index.vue'

const $router = {
  push: jest.fn()
}

const factory = () => {
  return mount(FvLogoutButton, {
    mocks: {
      $t: (msg) => msg,
      $router
    }
  })
}

describe('FvLogoutButton', () => {
  it('should render a fv logout button', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="button"]').exists()).toBeTruthy()
  })
  it('should logout with keycloak when button is clicked', () => {
    const wrapper = factory()
    const button = wrapper.find('[data-testid="button"]')
    button.vm.$emit('click')
    const expectedPath = '/logout'
    expect($router.push).toHaveBeenCalledTimes(1)
    expect($router.push).toHaveBeenCalledWith(expectedPath)
  })
})
