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
})
