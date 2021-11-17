import { shallowMount } from '@vue/test-utils'
import FvPaymentStructureIndex from './index'

const $router = {
  push: jest.fn()
}

const factory = () => {
  return shallowMount(FvPaymentStructureIndex, {
    mocks: {
      $t: (msg) => msg,
      $router
    }
  })
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('FvPaymentStructureIndex', () => {
  it('should render a fv payment structure index', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="headerIndex"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="paymentStructureList"]').exists()).toBe(
      true
    )
  })
  it('should redirect to create payment structure when clicked on create button', () => {
    const wrapper = factory()
    const headerIndex = wrapper.find('[data-testid="headerIndex"]')
    headerIndex.vm.$emit('button:click')
    expect($router.push).toHaveBeenCalledTimes(1)
    const expectedRoute = '/paymentStructures/new'
    expect($router.push).toHaveBeenCalledWith(expectedRoute)
  })
  it('should redirect to show payment structure when it is selected from list', () => {
    const wrapper = factory()
    const list = wrapper.find('[data-testid="paymentStructureList"]')
    const paymentStructure = {
      id: 42
    }
    list.vm.$emit('list:selected', paymentStructure)
    expect($router.push).toHaveBeenCalledTimes(1)
    const expectedRoute = '/paymentStructures/' + paymentStructure.id
    expect($router.push).toHaveBeenCalledWith(expectedRoute)
  })
})
