import { shallowMount } from '@vue/test-utils'
import FvPaymentConditionIndex from './index.vue'

const $router = {
  push: jest.fn(),
}

const factory = () => {
  return shallowMount(FvPaymentConditionIndex, {
    mocks: {
      $t: (msg) => msg,
      $router,
    },
  })
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('FvPaymentConditionIndex', () => {
  it('should render a fv payment condition index', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="headerIndex"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="paymentConditionList"]').exists()).toBe(true)
  })
  it('should redirect to create payment condition when clicked on create button', () => {
    const wrapper = factory()
    const headerIndex = wrapper.find('[data-testid="headerIndex"]')
    headerIndex.vm.$emit('button:click')
    expect($router.push).toHaveBeenCalledTimes(1)
    const expectedRoute = '/paymentConditions/new'
    expect($router.push).toHaveBeenCalledWith(expectedRoute)
  })
  it('should redirect to show payment condition when it is selected from list', () => {
    const wrapper = factory()
    const list = wrapper.find('[data-testid="paymentConditionList"]')
    const paymentCondition = {
      id: 42,
    }
    list.vm.$emit('list:selected', paymentCondition)
    expect($router.push).toHaveBeenCalledTimes(1)
    const expectedRoute = '/paymentConditions/' + paymentCondition.id
    expect($router.push).toHaveBeenCalledWith(expectedRoute)
  })
})
