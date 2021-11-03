import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvBreadcrumbs from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const account = 'test'
const space = 'space'

const accountFromStore = {
  name: 'accountFromStore'
}

const auth = {
  loggedIn: true
}

const loggedOutAuth = {
  loggedIn: false
}

const route = {
  matched: [
    {
      name: 'products-id',
      path: '/products/:id'
    }
  ],
  params: {
    id: 1,
    action: 'read'
  }
}

const factory = () => {
  return mount(FvBreadcrumbs, {
    localVue,
    store,
    propsData: {
      account,
      space
    },
    mocks: {
      $t: (msg) => msg,
      $auth: auth,
      $route: route
    }
  })
}

const loggedOutfactory = () => {
  return mount(FvBreadcrumbs, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
      $auth: loggedOutAuth,
      $route: route
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      accounts: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          findById: () => () => accountFromStore
        }
      }
    }
  })
})

describe('FvBreadcrumbs', () => {
  it('should not render a fv breadcrumbs if the user is not logged in', () => {
    const wrapper = loggedOutfactory()
    expect(wrapper.find('[data-testid="breadcrumbs"]').exists()).toBe(false)
  })
  it('should render a fv breadcrumbs', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="breadcrumbs"]').exists()).toBe(true)
  })
  it('should create a crumb', () => {
    const wrapper = factory()
    const href = '/'
    const text = 'test'
    const disabled = false
    const expectedCrumb = {
      href,
      text: 'breadcrumbs.route.' + text,
      disabled
    }
    const crumb = wrapper.vm.createCrumb(href, text, disabled)
    expect(crumb).toEqual(expectedCrumb)
  })
  it('should create a crumb and replace accounts-id text by account name', () => {
    const wrapper = factory()
    const href = '/'
    const text = 'accounts-id'
    const disabled = false
    const expectedCrumb = {
      href,
      text: accountFromStore.name,
      disabled
    }
    const crumb = wrapper.vm.createCrumb(href, text, disabled)
    expect(crumb).toEqual(expectedCrumb)
  })
  it('should suffix products-action- text by action name', () => {
    const wrapper = factory()
    const href = '/products/action'
    const text = 'products-action-'
    const disabled = false
    const expectedCrumb = {
      href: '/products',
      text: `breadcrumbs.route.products-action-${route.params.action}`,
      disabled
    }
    const crumb = wrapper.vm.createCrumb(href, text, disabled)
    expect(crumb).toEqual(expectedCrumb)
  })
  it('should display account name and space in first crumb', () => {
    const wrapper = factory()
    const expectedCrumb = {
      disabled: false,
      href: '/',
      text:
        'breadcrumbs.account' + account + ' / breadcrumbs.space spaces.' + space
    }
    expect(wrapper.vm.crumbs[0]).toEqual(expectedCrumb)
  })
  it('should display all crumbs', () => {
    const wrapper = factory()
    const expectedCrumbs = [
      {
        disabled: false,
        href: '/',
        text:
          'breadcrumbs.account' +
          account +
          ' / breadcrumbs.space spaces.' +
          space
      },
      {
        disabled: false,
        href: '/products',
        text: 'breadcrumbs.route.products'
      },
      {
        disabled: true,
        href: '/products/:id',
        text: 'breadcrumbs.route.products-id'
      }
    ]
    expect(wrapper.vm.crumbs).toEqual(expectedCrumbs)
  })
})
