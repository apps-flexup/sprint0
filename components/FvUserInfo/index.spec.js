import { shallowMount } from '@vue/test-utils'
import FvUserInfo from './index.vue'

describe('FvUserInfo', () => {
  const $auth = {
    user: {
      name: 'test',
      email: 'test'
    }
  }
  it('should render a FvUserInfo', () => {
    const wrapper = shallowMount(FvUserInfo, {
      mocks: {
        $t: (msg) => msg,
        $auth
      }
    })
    expect(wrapper.find('[data-testid="userInfo"]').exists()).toBe(true)
  })
})
