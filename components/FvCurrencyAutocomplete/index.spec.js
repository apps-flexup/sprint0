import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvCurrencyAutocomplete from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const currencies = [
  {
    active: true,
    id: 49,
    iso3: 'EUR',
    ison: 978,
    minor: 2,
    name: 'Euro',
  },
  {
    active: true,
    id: 149,
    iso3: 'USD',
    ison: 840,
    minor: 2,
    name: 'US Dollar',
  },
]

const factory = () => {
  return shallowMount(FvCurrencyAutocomplete, {
    localVue,
    store,
    mocks: {
      $t: (msg) => msg,
    },
  })
}
beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      currencies: {
        namespaced: true,
        actions: {
          get: jest.fn(),
        },
        getters: {
          all: () => currencies,
          findIso: () => () => currencies[0],
          find: () => () => currencies[0],
        },
      },
    },
  })
})

describe('FvCurrencyAutocomplete', () => {
  it('should render a fv currency autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBe(true)
  })
  it('should get all currencies from the store', () => {
    const wrapper = factory()
    expect(wrapper.vm.items).toEqual(currencies)
  })
  it('should emit an event when currency is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid=autocomplete]')
    const selectedCurrency = currencies[0]
    autocomplete.vm.$emit('autocomplete:selected', selectedCurrency)
    const selectedCalls = wrapper.emitted('currency:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(selectedCurrency.iso3)
  })
})
