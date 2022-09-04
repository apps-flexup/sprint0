import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvCountryAutocomplete from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const countries = [
  {
    active: true,
    continent: null,
    continent_id: null,
    currencies: [
      {
        active: true,
        id: 49,
        iso3: 'EUR',
        ison: 978,
        minor: 2,
        name: 'Euro'
      }
    ],
    id: 77,
    iso2: 'FR',
    iso3: 'FRA',
    ison: 250,
    languages: [
      {
        active: true,
        id: 47,
        iso2: 'fr',
        name: null,
        native: null
      }
    ],
    name: 'France',
    sovereignty: {
      countries_count: 193,
      description: 'UN member state',
      id: 13,
      name: 'UN'
    },
    sovereignty_id: 13
  },
  {
    active: true,
    continent: null,
    continent_id: null,
    currencies: [
      {
        active: true,
        id: 49,
        iso3: 'EUR',
        ison: 978,
        minor: 2,
        name: 'Euro'
      }
    ],
    id: 22,
    iso2: 'BE',
    iso3: 'BEL',
    ison: 56,
    languages: [
      {
        active: false,
        id: 114,
        iso2: 'nl',
        name: null,
        native: null
      },
      {
        active: true,
        id: 32,
        iso2: 'de',
        name: null,
        native: null
      },
      {
        active: true,
        id: 47,
        iso2: 'fr',
        name: null,
        native: null
      }
    ],
    name: 'Belgium',
    sovereignty: {
      countries_count: 193,
      description: 'UN member state',
      id: 13,
      name: 'UN'
    },
    sovereignty_id: 13
  }
]

const factory = () => {
  return shallowMount(FvCountryAutocomplete, {
    localVue,
    store
  })
}
beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      countries: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          all: () => countries
        }
      }
    }
  })
})

describe('FvCountryAutocomplete', () => {
  it('should render a fv country autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBeTruthy()
  })
  it('should get all countries from the store', () => {
    const wrapper = factory()
    expect(wrapper.vm.items).toEqual(countries)
  })
  it('should emit an event when country is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid=autocomplete]')
    const selectedCountry = countries[0]
    autocomplete.vm.$emit('autocomplete:selected', selectedCountry)
    const selectedCalls = wrapper.emitted('country:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(selectedCountry)
  })
  it('should emit a generic event when country is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid=autocomplete]')
    const selectedCountry = countries[0]
    autocomplete.vm.$emit('autocomplete:selected', selectedCountry)
    const selectedCalls = wrapper.emitted('payload:changed')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(selectedCountry)
  })
})
