import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import FvSearchAutocomplete from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvSearchAutocomplete', () => {
  let store
  let vuetify

  const factory = () => {
    return shallowMount(FvSearchAutocomplete, {
      localVue,
      store,
      computed: {
        items: () => ['test', 'test', 'searchBar']
      },
      vuetify
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
            all: jest.fn()
          }
        }
      }
    })
    vuetify = new Vuetify()
  })
  it('should render a fv search autocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="selector"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="searchBar"]').exists()).toBeTruthy()
  })
  it('should receive items in data', () => {
    const wrapper = factory()
    const selector = wrapper.find('[data-testid="selector"]')
    expect(selector.props().items).toStrictEqual(['Catégories', 'Produits', 'Offres', 'Services'])
  })
  it('should receive items in data', () => {
    const wrapper = factory()
    const selector = wrapper.find('[data-testid="searchBar"]')
    expect(selector.props().items).toStrictEqual(['test', 'test', 'searchBar'])
  })
})
