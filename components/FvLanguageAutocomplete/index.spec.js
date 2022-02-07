import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvLanguageAutocomplete from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const locales = ['en', 'fr']

const factory = () => {
  return shallowMount(FvLanguageAutocomplete, {
    localVue,
    store,
  })
}
beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      settings: {
        namespaced: true,
        getters: {
          locales: () => locales,
        },
      },
    },
  })
})

describe('FvLanguageAutocomplete', () => {
  it('should render a fv language autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBe(true)
  })
  it('should get all locales from the store', () => {
    const wrapper = factory()
    expect(wrapper.vm.items).toEqual(locales)
  })
  it('should emit an event when language is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid=autocomplete]')
    const selectedLocale = locales[0]
    autocomplete.vm.$emit('autocomplete:selected', selectedLocale)
    const selectedCalls = wrapper.emitted('language:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(selectedLocale)
  })
})
