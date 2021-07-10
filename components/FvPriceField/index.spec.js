import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvPriceField from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const currency = {
  active: true,
  id: 49,
  iso3: 'EUR',
  ison: 978,
  minor: 2,
  name: 'Euro'
}

const settings = {
  currency: 'EUR',
  price_nb_after_decimal_point: 2
}

const $activeAccount = {
  settings: () => settings
}

const factory = () => {
  return shallowMount(FvPriceField, {
    localVue,
    store,
    mocks: {
      $activeAccount
    }
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      currencies: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          findIso: () => () => currency
        }
      }
    }
  })
})

describe('FvPriceField', () => {
  it('should render a fv price field', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="priceField"]').exists()).toBe(true)
  })
  it('should emit an event when price changed', () => {
    const wrapper = factory()
    const priceField = wrapper.find('[data-testid="priceField"]')
    const amount = 10.42
    priceField.vm.$emit('input', amount)
    const expectedPrice = {
      amount,
      currency: settings.currency
    }
    const priceChangedCalls = wrapper.emitted('price:changed')
    expect(priceChangedCalls).toBeTruthy()
    expect(priceChangedCalls).toHaveLength(1)
    expect(priceChangedCalls[0][0]).toEqual(expectedPrice)
  })
  it('should emit a generic event when price changed', () => {
    const wrapper = factory()
    const priceField = wrapper.find('[data-testid="priceField"]')
    const amount = 10.42
    priceField.vm.$emit('input', amount)
    const expectedPrice = {
      amount,
      currency: settings.currency
    }
    const priceChangedCalls = wrapper.emitted('payload:changed')
    expect(priceChangedCalls).toBeTruthy()
    expect(priceChangedCalls).toHaveLength(1)
    expect(priceChangedCalls[0][0]).toEqual(expectedPrice)
  })
  it('should set truncate price to false if click inside', async () => {
    const wrapper = factory()
    await wrapper.setData({ truncatePrice: true })
    const priceField = wrapper.find('[data-testid="priceField"]')
    priceField.vm.$emit('click')
    expect(wrapper.vm.truncatePrice).toBe(false)
  })
  it('should set truncate price to true if click inside', async () => {
    const wrapper = factory()
    await wrapper.setData({ truncatePrice: false })
    const priceField = wrapper.find('[data-testid="priceField"]')
    priceField.vm.$emit('click:outside')
    expect(wrapper.vm.truncatePrice).toBe(true)
  })
})
