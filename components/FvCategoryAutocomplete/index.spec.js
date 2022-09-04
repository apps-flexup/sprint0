import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvCategoryAutocomplete from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const categories = [
  {
    active: true,
    allow_at_client: true,
    allow_at_supplier: true,
    allow_remote: false,
    allow_shipping: true,
    description: {
      en: 'en desc',
      fr: 'fr desc',
      it: 'it desc'
    },
    dimension: null,
    id: 1,
    name: {
      en: 'All (root)',
      fr: 'Tous (catégorie racine)',
      it: 'Tutti (radice)'
    },
    offers_count: 0,
    orderable: false,
    other_parent: [],
    parent_id: null,
    sort_order: 0,
    status: 'active',
    unit: null
  },
  {
    active: false,
    allow_at_client: true,
    allow_at_supplier: true,
    allow_remote: false,
    allow_shipping: true,
    description: {
      en: 'Services category',
      fr: 'Catégorie chapeau pour les services (en français)'
    },
    dimension: 'duration',
    id: 2,
    name: {
      en: 'Services',
      fr: 'Services (en français)'
    },
    offers_count: 1,
    orderable: true,
    other_parent: [],
    parent_id: 1,
    sort_order: 0,
    status: 'active',
    unit: 'day'
  }
]

const factory = () => {
  return shallowMount(FvCategoryAutocomplete, {
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
      categories: {
        namespaced: true,
        actions: {
          get: jest.fn()
        },
        getters: {
          all: () => categories
        }
      }
    }
  })
})

describe('FvCategoryAutocomplete', () => {
  it('should render a fv category autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid=autocomplete]').exists()).toBeTruthy()
  })
  it('should get all categories from the store', () => {
    const wrapper = factory()
    expect(wrapper.vm.items).toEqual(categories)
  })
  it('should emit an event when category is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid=autocomplete]')
    const selectedCategory = categories[0]
    autocomplete.vm.$emit('autocomplete:selected', selectedCategory)
    const selectedCalls = wrapper.emitted('category:selected')
    expect(selectedCalls).toBeTruthy()
    expect(selectedCalls).toHaveLength(1)
    expect(selectedCalls[0][0]).toBe(selectedCategory)
  })
})
