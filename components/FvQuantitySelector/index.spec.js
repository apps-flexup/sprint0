import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvQuantitySelector from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
const factory = (propsData) => {
  return mount(FvQuantitySelector, {
    propsData: {
      ...propsData
    },
    localVue,
    store
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      settings: {
        namespaced: true,
        actions: {
          getSettings: jest.fn()
        },
        getters: {
          settings: () => jest.fn()
        }
      }
    }
  })
})

describe('FvQuantitySelector', () => {
  it('should render a quantity selector', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="quantitySelector"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="buttonMinus"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="buttonPlus"]').exists()).toBe(true)
  })
  it('should display a quantity of 1 by default', () => {
    const wrapper = factory()
    const textField = wrapper.find('[data-testid="quantitySelector"]')
    expect(textField.props().value).toBe('1')
  })
  it('should display passed quantity', () => {
    const wrapper = factory({ quantity: 5 })
    const textField = wrapper.find('[data-testid="quantitySelector"]')
    expect(textField.props().value).toBe('5')
  })
  it('should add 1 to quantity when plus is clicked', () => {
    const wrapper = factory()
    const buttonPlus = wrapper.find('[data-testid="buttonPlus"]')
    buttonPlus.vm.$emit('icon:clicked')
    const quantityChangedCalls = wrapper.emitted('quantitySelector:changed')
    expect(quantityChangedCalls).toBeTruthy()
    expect(quantityChangedCalls).toHaveLength(1)
    expect(quantityChangedCalls[0][0]).toBe(2)
  })
  it('should remove 1 to quantity when minus is clicked', () => {
    const wrapper = factory()
    const buttonMinus = wrapper.find('[data-testid="buttonMinus"]')
    buttonMinus.vm.$emit('icon:clicked')
    const quantityChangedCalls = wrapper.emitted('quantitySelector:changed')
    expect(quantityChangedCalls).toBeTruthy()
    expect(quantityChangedCalls).toHaveLength(1)
    expect(quantityChangedCalls[0][0]).toBe(0)
  })
  it('should emit an event when quantity is entered manually', () => {
    const wrapper = factory()
    const quantitySelector = wrapper.find('[data-testid="quantitySelector"]')
    const quantity = 42
    quantitySelector.vm.$emit('input', quantity)
    const quantityChangedCalls = wrapper.emitted('quantitySelector:changed')
    expect(quantityChangedCalls).toBeTruthy()
    expect(quantityChangedCalls).toHaveLength(1)
    expect(quantityChangedCalls[0][0]).toBe(quantity)
  })
})
