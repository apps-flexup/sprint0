import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvUnitAutocomplete from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvUnitAutocomplete', () => {
  const item = {
    dimension: 'length',
    symbole: 'm',
    id: 5
  }
  let store
  const factory = () => {
    return mount(FvUnitAutocomplete, {
      localVue,
      store,
      stubs: {
        FvAutocomplete: true
      },
      mocks: {
        $t: (msg) => msg
      }
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        units: {
          namespaced: true,
          actions: {
            get: jest.fn()
          },
          getters: {
            findByDimension: () => () => item
          }
        }
      }
    })
  })
  it('should render a FvUnitAutocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="fvAutocomplete"]').exists()).toBe(true)
  })
  it('should send a signal when unit is selected', () => {
    const wrapper = factory()
    const fvAutocomplete = wrapper.find('[data-testid="fvAutocomplete"]')
    fvAutocomplete.vm.$emit('autocomplete:selected', item)
    const submittedCalls = wrapper.emitted('unit:selected')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toBe(item)
  })
})
