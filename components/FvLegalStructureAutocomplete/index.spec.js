import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'vuex'
import FvLegalStructureAutocomplete from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const legalStructures = [
  {
    id: 1,
    name: 'Auto-entrepreneur',
    sigle: 'AE'
  },
  {
    id: 2,
    name: 'Entreprise agricole à responsabilité limitée',
    sigle: 'EARL'
  },
  {
    id: 3,
    name: 'Entreprise individuelle',
    sigle: 'EI'
  }
]

const factory = () => {
  return shallowMount(FvLegalStructureAutocomplete, {
    localVue,
    store
  })
}
beforeEach(() => {
  // eslint-disable-next-line import/no-named-as-default-member
  store = new Vuex.Store({
    modules: {
      contracts: {
        namespaced: true,
        actions: {
          getLegalStructures: jest.fn()
        },
        getters: {
          legalStructures: () => legalStructures
        }
      }
    }
  })
})

describe('FvLegalStructureAutocomplete', () => {
  it('should render a fv legal structure autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBeTruthy()
  })
  it('should get all legal structures from the store', () => {
    const wrapper = factory()
    expect(wrapper.vm.items).toEqual(legalStructures)
  })
  it('should emit an event when legal structure is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid=autocomplete]')
    const selectedLegalStructure = legalStructures[0]
    autocomplete.vm.$emit('autocomplete:selected', selectedLegalStructure)
    const selectedCalls = wrapper.emitted('legalstructure:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(selectedLegalStructure)
  })
  it('should emit a generic event when legal structure is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid=autocomplete]')
    const selectedLegalStructure = legalStructures[0]
    autocomplete.vm.$emit('autocomplete:selected', selectedLegalStructure)
    const selectedCalls = wrapper.emitted('payload:changed')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(selectedLegalStructure)
  })
})
