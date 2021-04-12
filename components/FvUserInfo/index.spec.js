import { mount } from '@vue/test-utils'
import FvUserInfo from './index.vue'

describe('FvUserInfo', () => {
  const auth = {
    loggedIn: true,
    user: 'gmelevec'
  }
  it('should render a FvUserInfo', () => {
    const wrapper = mount(FvUserInfo, {
      mocks: {
        $t: (msg) => msg,
        $auth: auth,
        user: auth.user
      }
    })
    expect(wrapper.find('[data-testid="userInfo"]').exists()).toBe(true)
  })
})
