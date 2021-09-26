import { shallowMount } from '@vue/test-utils'
import FvProductArchivedIndex from './index'

const $router = {
  push: jest.fn()
}

const cannotCreateProductRights = {
  canCreateProduct: () => {
    return false
  }
}

const cannotCreateProductFactory = () => {
  return shallowMount(FvProductArchivedIndex, {
    mocks: {
      $t: (msg) => msg,
      $router,
      $rights: cannotCreateProductRights
    }
  })
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('FvProductArchivedIndex', () => {
  it('should render a fv product index', () => {
    const wrapper = cannotCreateProductFactory()
    expect(wrapper.find('[data-testid="productArchivedList"]').exists()).toBe(
      true
    )
  })
  it.each([['selected', 'read']])(
    'should redirect to %s product when it is selected for %s from list',
    (action, expectedPath) => {
      const wrapper = cannotCreateProductFactory()
      const list = wrapper.find('[data-testid="productArchivedList"]')
      const product = {
        id: 42
      }
      list.vm.$emit(`list:${action}`, product)
      expect($router.push).toHaveBeenCalledTimes(1)
      const expectedRoute = `/products/${expectedPath}/${product.id}`
      expect($router.push).toHaveBeenCalledWith(expectedRoute)
    }
  )
})
