import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvOfferAutocomplete from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const offers = [
  {
    account_id: 1,
    active: true,
    product_id: 17,
    dimension: 'volume',
    unit: 'm³',
    currency: 'EUR',
    description: {
      en: 'True Goat milk',
      fr: 'Le vrai lait de chèvre'
    },
    elasticity: 20,
    evaluation_avg: 6.5,
    favorite: true,
    id: 1,
    illustration_url: 'https://placeimg.com/640/480?id=1',
    name: {
      en: 'Goat milk',
      fr: 'Lait de chêvre'
    },
    offer_at_client: true,
    offer_at_supplier: true,
    offer_remote: true,
    offer_shipping: true,
    params: {
      offerinfo: 'goat milk is offered still'
    },
    price: 100,
    reference: 'EKWOHX',
    status: 'reserved'
  },
  {
    account_id: 1,
    active: true,
    category_id: 2,
    currency: 'EUR',
    description: {
      en: 'description of offer which is really beuatyful'
    },
    dimension: 'duration',
    elasticity: 0,
    evaluation_avg: 6.5,
    favorite: false,
    id: 2,
    illustration_url: 'https://placeimg.com/640/480?id=2',
    name: {
      en: 'my beautifiul offer'
    },
    offer_at_client: true,
    offer_at_supplier: true,
    offer_remote: true,
    offer_shipping: true,
    params: {
      identifiant_service: {
        fr: 'blabla725-924'
      }
    },
    price: 100,
    reference: 'LLGVXJ',
    status: 'draft',
    unit: 'day'
  }
]

const thirdPartyAccount = {
  avatar: '/images/avatar-2.png',
  country_id: 77,
  id: 3,
  name: 'Johanna (supplier)',
  offers_count: 0,
  params: {},
  parent_id: null,
  roles: ['supplier'],
  roles_methods: null,
  supplier: false,
  user_id: '2ae5fcf8-9ed5-480a-89c8-a2f946e72140',
  currency: 'EUR'
}

const factory = (propsData) => {
  return shallowMount(FvOfferAutocomplete, {
    localVue,
    store,
    propsData: {
      ...propsData
    },
    mocks: {
      $t: (msg) => msg
    }
  })
}
beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      thirdPartyAccounts: {
        namespaced: true,
        actions: {
          getAll: jest.fn()
        },
        getters: {
          find: () => () => thirdPartyAccount
        }
      },
      offers: {
        namespaced: true,
        actions: {
          getAll: jest.fn()
        },
        getters: {
          getForAccount: () => () => offers
        }
      }
    }
  })
})

describe('FvOfferAutocomplete', () => {
  it('should render a fv offer autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBe(true)
  })
  it('should have no offers if there is no account id', () => {
    const wrapper = factory({ thirdPartyAccountId: null })
    expect(wrapper.vm.items).toEqual([])
  })
  it('should init items third party account offers', () => {
    const wrapper = factory({ thirdPartyAccountId: 1 })
    expect(wrapper.vm.items).toEqual(offers)
  })
  it('should emit an event when offer is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid=autocomplete]')
    const selectedOffer = offers[0]
    autocomplete.vm.$emit('autocomplete:selected', selectedOffer)
    const selectedCalls = wrapper.emitted('offers:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(selectedOffer)
  })
})
