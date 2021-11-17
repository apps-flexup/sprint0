import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvOrderDataTable from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const $displayRules = {
  localeDate: jest.fn(),
  paymentStructure: jest.fn()
}

const settings = {
  currency: 'EUR'
}

describe('FvOrderDataTable', () => {
  const factory = (propsData) => {
    return shallowMount(FvOrderDataTable, {
      localVue,
      store,
      propsData: {
        ...propsData
      },
      mocks: {
        $t: (msg) => msg,
        $displayRules
      }
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        settings: {
          namespaced: true,
          getters: {
            settings: () => settings
          }
        }
      }
    })
  })
  it('should render a fv order data table', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="dataTable"]').exists()).toBe(true)
  })
  it('should emit an event when a row is selected', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    dataTable.vm.$emit('dataTable:selected')
    const selectedCalls = wrapper.emitted('dataTable:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
  })
  it('should emit an event when need to sort', () => {
    const wrapper = factory()
    const dataTable = wrapper.find('[data-testid="dataTable"]')
    dataTable.vm.$emit('dataTable:sortBy')
    const sortByCalls = wrapper.emitted('dataTable:sortBy')
    expect(sortByCalls).toBeTruthy()
    expect(sortByCalls).toHaveLength(1)
  })
  it('should call locale date display rule when displaying the locale date', () => {
    const wrapper = factory()
    const item = { foo: 'foo' }
    wrapper.vm.localeDate(item)
    expect($displayRules.localeDate).toHaveBeenCalledTimes(1)
    expect($displayRules.localeDate).toHaveBeenCalledWith(item)
  })
  it('should call payment structure display rule when displaying the payment structure', () => {
    const wrapper = factory()
    const item = { foo: 'foo' }
    wrapper.vm.paymentStructure(item)
    expect($displayRules.paymentStructure).toHaveBeenCalledTimes(1)
    expect($displayRules.paymentStructure).toHaveBeenCalledWith(item)
  })
  it('should return 0 as total if there is no orders', () => {
    const wrapper = factory({ items: null })
    expect(wrapper.vm.total).toBe(0)
  })
  it('should return the sum of orders amounts if there is orders', () => {
    const items = [{ amount: 100 }, { amount: 25 }, { amount: 45.25 }]
    const wrapper = factory({ items })
    expect(wrapper.vm.total).toBe(170.25)
  })
  it('should get preferred currency from settings', () => {
    const wrapper = factory()
    expect(wrapper.vm.preferredCurrency).toBe(settings.currency)
  })
  it('should use only active and displayed headers', () => {
    const headers = [
      { active: true, displayed: true },
      { active: true, displayed: false },
      { active: false, displayed: true },
      { active: false, displayed: false }
    ]
    const wrapper = factory({ headers })
    expect(wrapper.vm.displayedHeaders.length).toBe(1)
  })
})
