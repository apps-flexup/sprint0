import { mount } from '@vue/test-utils'
import FvShowMenu from './index.vue'

const menu = [
  {
    active: true,
    icon: 'mdi-apps',
    title: 'manageMenu.home',
    to: '/'
  },
  {
    active: true,
    icon: 'mdi-inbox-arrow-down-outline',
    title: 'manageMenu.orders',
    to: '/orders'
  }
]

const factory = () => {
  return mount(FvShowMenu, {
    propsData: {
      list: menu
    },
    mocks: {
      $t: (msg) => msg
    }
  })
}

describe('FvShowMenu', () => {
  it('should render a fv show menu', () => {
    const wrapper = factory()
    expect(wrapper.findAll('[data-testid="icon"]').length).toBe(2)
    expect(wrapper.findAll('[data-testid="title"]').length).toBe(2)
  })
})
