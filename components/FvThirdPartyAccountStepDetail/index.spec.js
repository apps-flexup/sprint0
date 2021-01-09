import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvThirdPartyAccountStepDetail from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvThirdPartyAccountStepDetail', () => {
  let store

  const factory = () => {
    return shallowMount(FvThirdPartyAccountStepDetail, {
      localVue,
      store,
      mocks: {
        $t: (msg) => msg
      }
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        countries: {
          namespaced: true,
          actions: {
            get: jest.fn()
          }
        }
      }
    })
  })
  it('should render a third party account step detail', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="name"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="address"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="zip"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="city"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="country"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="legalStructure"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="siret"]').exists()).toBe(true)
  })
  it('should send a signal when name is changed', () => {
    const wrapper = factory()
    const nameInput = wrapper.find('[data-testid="name"]')
    const name = 'toto'
    nameInput.vm.$emit('input', name)
    const emitCalls = wrapper.emitted('payload:changed')
    expect(emitCalls).toBeTruthy()
    expect(emitCalls).toHaveLength(1)
    expect(emitCalls[0][0].name).toBe(name)
  })
  it('should send a signal when address is changed', () => {
    const wrapper = factory()
    const addressInput = wrapper.find('[data-testid="address"]')
    const address = '10 rue de la poupee qui tousse'
    addressInput.vm.$emit('input', address)
    const emitCalls = wrapper.emitted('payload:changed')
    expect(emitCalls).toBeTruthy()
    expect(emitCalls).toHaveLength(1)
    expect(emitCalls[0][0].address).toBe(address)
  })
  it('should send a signal when zip is changed', () => {
    const wrapper = factory()
    const zipInput = wrapper.find('[data-testid="zip"]')
    const zip = '12345'
    zipInput.vm.$emit('input', zip)
    const emitCalls = wrapper.emitted('payload:changed')
    expect(emitCalls).toBeTruthy()
    expect(emitCalls).toHaveLength(1)
    expect(emitCalls[0][0].zip).toBe(zip)
  })
  it('should send a signal when city is changed', () => {
    const wrapper = factory()
    const cityInput = wrapper.find('[data-testid="city"]')
    const city = 'paris'
    cityInput.vm.$emit('input', city)
    const emitCalls = wrapper.emitted('payload:changed')
    expect(emitCalls).toBeTruthy()
    expect(emitCalls).toHaveLength(1)
    expect(emitCalls[0][0].city).toBe(city)
  })
  it('should send a signal when country is changed', () => {
    const wrapper = factory()
    const countryInput = wrapper.find('[data-testid="country"]')
    const countryId = 1
    countryInput.vm.$emit('country:selected', countryId)
    const emitCalls = wrapper.emitted('payload:changed')
    expect(emitCalls).toBeTruthy()
    expect(emitCalls).toHaveLength(1)
    expect(emitCalls[0][0].country_id).toBe(countryId)
  })
  it('should send a signal when legalStructure is changed', () => {
    const wrapper = factory()
    const legalStructureInput = wrapper.find('[data-testid="legalStructure"]')
    const legalStructureId = 1
    legalStructureInput.vm.$emit('legalstructure:selected', legalStructureId)
    const emitCalls = wrapper.emitted('payload:changed')
    expect(emitCalls).toBeTruthy()
    expect(emitCalls).toHaveLength(1)
    expect(emitCalls[0][0].legal_structure_id).toBe(legalStructureId)
  })
  it('should send a signal when siret is changed', () => {
    const wrapper = factory()
    const siretInput = wrapper.find('[data-testid="siret"]')
    const siret = '145236'
    siretInput.vm.$emit('input', siret)
    const emitCalls = wrapper.emitted('payload:changed')
    expect(emitCalls).toBeTruthy()
    expect(emitCalls).toHaveLength(1)
    expect(emitCalls[0][0].siret).toBe(siret)
  })
})
