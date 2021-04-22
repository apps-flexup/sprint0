import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvSubMenu from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvSubMenu', () => {
  let store
  const userMenu = [
    {
      active: true,
      icon: 'mdi-account-circle-outline',
      title: 'userMenu.data',
      to: '/personaldata'
    },
    {
      active: true,
      icon: 'mdi-shield-lock-outline',
      title: 'userMenu.security',
      to: '/security'
    },
    {
      active: true,
      icon: 'mdi-account-switch-outline',
      title: 'userMenu.management',
      to: '/accounts'
    }
  ]
  const factory = (propsData) => {
    return mount(FvSubMenu, {
      localVue,
      store,
      propsData: {
        ...propsData
      },
      stubs: {
        FvShowMenu: true
      },
      mocks: {
        $t: (msg) => msg
      }
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        settings: {
          namespaced: true,
          getters: {
            userMenu: () => userMenu
          }
        }
      }
    })
  })
  it('should render a sub menu', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="categoryMenu"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="menuList"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="menu"]').exists()).toBe(true)
  })
  it('should return the menu name', () => {
    const wrapper = factory({ menuName: 'user' })
    expect(wrapper.vm.findMenu).toBe(userMenu)
  })
})