import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvNavBarManage from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const manageLinks = [
  {
    active: true,
    title: 'navBar.manage.0',
    to: '/dashboard'
  },
  {
    active: true,
    title: 'navBar.manage.1',
    to: '/currentGestion'
  },
  {
    active: true,
    title: 'navBar.manage.2',
    to: '/FlexUpGestion'
  }
]

const sellLinks = [
  {
    active: true,
    title: 'navBar.seller.0',
    to: '/dashboard'
  },
  {
    active: true,
    title: 'navBar.seller.1',
    to: '/orders'
  },
  {
    active: true,
    title: 'navBar.seller.2',
    to: '/offers'
  }
]

const factory = () => {
  return shallowMount(FvNavBarManage, {
    localVue,
    store,
    propsData: {
      space: 'manage'
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
          manageNavBar: () => manageLinks,
          sellNavBar: () => sellLinks
        }
      }
    }
  })
})

describe('FvNavBarManage', () => {
  it('should render a nav bar buyer', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="navBar"]').exists()).toBeTruthy()
    expect(wrapper.findAll('[data-testid="links"]').length).toBe(manageLinks.length)
    expect(wrapper.find('[data-testid="createButton"]').exists()).toBeTruthy()
  })
})
