import { mount } from '@vue/test-utils'
import FvUserAccount from './index.vue'

describe('FvUserAccount', () => {
  const factory = (menu) => {
    return mount(FvUserAccount, {
      mocks: {
        $auth: {
          loggedIn: menu ? menu.loggedIn : true,
          user: {
            preferred_username: 'toto'
          }
        },
        $t: (msg) => msg
      }
    })
  }

  it('should render a fvUserAccount when logged in', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="loginBtn"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="menu"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="accountBtn"]').exists()).toBe(true)
  })
  it('should render a loggedIn button when logged out', () => {
    const wrapper = factory({ loggedIn: false })
    expect(wrapper.find('[data-testid="loginBtn"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="menu"]').exists()).toBe(false)
    expect(wrapper.find('[data-testid="accountBtn"]').exists()).toBe(false)
  })
})
