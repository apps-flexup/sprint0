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
  const units = [
    {
      base: 'byte',
      default: true,
      dimension: 'data',
      id: 3,
      symbole: 'byte',
      unit_per_base: 1
    },
    {
      base: 'hr',
      default: true,
      dimension: 'duration',
      id: 4,
      symbole: 'hr',
      unit_per_base: 1
    }
  ]
  let store
  const factory = (propsData) => {
    return mount(FvUnitAutocomplete, {
      localVue,
      store,
      propsData: {
        ...propsData
      },
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
            findByDimension: () => () => item,
            all: () => units
          }
        }
      }
    })
  })
  it('should render a FvUnitAutocomplete', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="autocomplete"]').exists()).toBe(true)
  })
  it('should send a signal when unit is selected', () => {
    const wrapper = factory()
    const autocomplete = wrapper.find('[data-testid="autocomplete"]')
    autocomplete.vm.$emit('autocomplete:selected', item)
    const expectedPayload = {
      dimension: item.dimension,
      unit: item.symbole
    }
    const submittedCalls = wrapper.emitted('unit:selected')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toEqual(expectedPayload)
  })
  it('should give all unit if no dimension filter', () => {
    const wrapper = factory({ dimensionFilter: null })
    expect(wrapper.vm.items).toBe(units)
  })
  it('should give all unit if dimension filter', () => {
    const wrapper = factory({ dimensionFilter: 'data' })
    const expected = [units[0]]
    expect(wrapper.vm.items).toEqual(expected)
  })
})
