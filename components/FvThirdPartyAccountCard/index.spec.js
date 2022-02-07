import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvThirdPartyAccountCard from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvThirdPartyAccountCard', () => {
  const thirdPartyAccount = {
    avatar: 'image',
    name: 'plop',
    address: '13 rue des plops',
    city: 'bourg la reine',
    zip: '14775',
    id: 1,
  }
  const country = {
    name: 'France',
    iso2: 'FR',
    id: 45,
  }
  const legalStructure = {
    name: 'Société par actions simplifiée unipersonnelle',
    sigle: 'SASU',
    id: 1,
  }
  let store
  const factory = (propsData) => {
    return mount(FvThirdPartyAccountCard, {
      localVue,
      store,
      propsData: {
        thirdPartyAccountId: 1,
        ...propsData,
      },
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        thirdPartyAccounts: {
          namespaced: true,
          actions: {
            getAll: jest.fn(),
          },
          getters: {
            find: () => (id) => (id ? thirdPartyAccount : null),
          },
        },
        countries: {
          namespaced: true,
          actions: {
            get: jest.fn(),
          },
          getters: {
            find: () => () => country,
          },
        },
        contracts: {
          namespaced: true,
          getters: {
            getLegalStructureById: () => () => legalStructure,
          },
        },
      },
    })
  })
  it('should render FvThirdPartyAccountCard', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="thirdPartyAccountAvatar"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="thirdPartyAccountName"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="thirdPartyAccountAddress"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="thirdPartyAccountCity"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="thirdPartyAccountCountry"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="thirdPartyAccountLegalStructure"]').exists()).toBe(true)
  })
  it('should get a third party account', () => {
    const wrapper = factory()
    expect(wrapper.vm.thirdPartyAccount).toBe(thirdPartyAccount)
  })
  it('should get a third party account country from getters', () => {
    const wrapper = factory()
    expect(wrapper.vm.country).toBe(country)
  })
  it('should get a third party account legal structure from getters', () => {
    const wrapper = factory()
    expect(wrapper.vm.legalStructure).toBe(legalStructure)
  })
  it('should computed return null when third party account country doesnt exist', () => {
    const wrapper = factory({ thirdPartyAccountId: null })
    expect(wrapper.vm.country).toBe(null)
  })
  it('should computed return null when third party account legal structure doesnt exist', () => {
    const wrapper = factory({ thirdPartyAccountId: null })
    expect(wrapper.vm.legalStructure).toBe(null)
  })
  it('should return the name of third party account', () => {
    const wrapper = factory()
    const thirdPartyAccountName = wrapper.find('[data-testid="thirdPartyAccountName"]')
    expect(thirdPartyAccountName.text()).toMatch('plop')
  })
  it('should return the adress of third party account', () => {
    const wrapper = factory()
    const thirdPartyAccountAddress = wrapper.find('[data-testid="thirdPartyAccountAddress"]')
    expect(thirdPartyAccountAddress.text()).toMatch('13 rue des plops')
  })
  it('should return the city of third party account', () => {
    const wrapper = factory()
    const thirdPartyAccountCity = wrapper.find('[data-testid="thirdPartyAccountCity"]')
    expect(thirdPartyAccountCity.text()).toEqual('bourg la reine 14775')
  })
  it('should return the country of third party account', () => {
    const wrapper = factory()
    const thirdPartyAccountCountry = wrapper.find('[data-testid="thirdPartyAccountCountry"]')
    expect(thirdPartyAccountCountry.text()).toEqual('France (FR)')
  })
  it('should return the legal structure of third party account', () => {
    const wrapper = factory()
    const thirdPartyAccountLegalStructure = wrapper.find('[data-testid="thirdPartyAccountLegalStructure"]')
    expect(thirdPartyAccountLegalStructure.text()).toEqual('Société par actions simplifiée unipersonnelle (SASU)')
  })
})
