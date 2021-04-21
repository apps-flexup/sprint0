import { shallowMount } from '@vue/test-utils'
import FvProductIndex from './index'

const $router = {
  push: jest.fn()
}

const factory = () => {
  return shallowMount(FvProductIndex, {
    mocks: {
      $t: (msg) => msg,
      $router
    }
  })
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('FvProductIndex', () => {
  it('should render a fv product index', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="createButton"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="productList"]').exists()).toBe(true)
  })
  it('should redirect to create product when clicked on create button', () => {
    const wrapper = factory()
    const createButton = wrapper.find('[data-testid="createButton"]')
    createButton.vm.$emit('button:click')
    expect($router.push).toHaveBeenCalledTimes(1)
    const expectedRoute = '/products/new'
    expect($router.push).toHaveBeenCalledWith(expectedRoute)
  })
  it('should redirect to show product when it is selected from list', () => {
    const wrapper = factory()
    const list = wrapper.find('[data-testid="productList"]')
    const product = {
      id: 42
    }
    list.vm.$emit('list:selected', product)
    expect($router.push).toHaveBeenCalledTimes(1)
    const expectedRoute = '/products/' + product.id
    expect($router.push).toHaveBeenCalledWith(expectedRoute)
  })
})
