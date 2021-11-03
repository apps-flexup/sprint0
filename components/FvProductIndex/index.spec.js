import { shallowMount } from '@vue/test-utils'
import FvProductIndex from './index'

const $router = {
  push: jest.fn()
}

const cannotCreateProductRights = {
  canCreateProduct: () => {
    return false
  }
}

const canCreateProductRights = {
  canCreateProduct: () => {
    return true
  }
}

const cannotCreateProductFactory = () => {
  return shallowMount(FvProductIndex, {
    mocks: {
      $t: (msg) => msg,
      $router,
      $rights: cannotCreateProductRights
    }
  })
}

const canCreateProductFactory = () => {
  return shallowMount(FvProductIndex, {
    mocks: {
      $t: (msg) => msg,
      $router,
      $rights: canCreateProductRights
    }
  })
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('FvProductIndex', () => {
  it('should render a fv product index', () => {
    const wrapper = cannotCreateProductFactory()
    expect(wrapper.find('[data-testid="productList"]').exists()).toBe(true)
  })
  it.each([
    ['selected', 'read'],
    ['edit', 'edit']
  ])(
    'should redirect to %s product when it is selected for %s from list',
    (action, expectedPath) => {
      const wrapper = cannotCreateProductFactory()
      const list = wrapper.find('[data-testid="productList"]')
      const product = {
        id: 42
      }
      list.vm.$emit(`list:${action}`, product)
      expect($router.push).toHaveBeenCalledTimes(1)
      const expectedRoute = `/products/${expectedPath}/${product.id}`
      expect($router.push).toHaveBeenCalledWith(expectedRoute)
    }
  )
  describe('User can create a product', () => {
    let wrapper
    beforeEach(() => {
      wrapper = canCreateProductFactory()
    })
    it('should have a create button', () => {
      expect(wrapper.find('[data-testid="createButton"]').exists()).toBe(true)
    })
    it('should redirect to create product when clicked on create button', () => {
      const createButton = wrapper.find('[data-testid="createButton"]')
      createButton.vm.$emit('button:click')
      expect($router.push).toHaveBeenCalledTimes(1)
      const expectedRoute = '/products/new'
      expect($router.push).toHaveBeenCalledWith(expectedRoute)
    })
  })
})
