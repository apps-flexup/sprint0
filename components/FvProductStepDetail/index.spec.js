import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvProductStepDetail from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvProductStepDetail', () => {
  let store
  const unit = {
    base: 'year',
    default: true,
    dimension: 'age',
    id: 1,
    symbole: 'year',
    unit_per_base: 1
  }

  const factory = () => {
    return shallowMount(FvProductStepDetail, {
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
        units: {
          namespaced: true,
          getters: {
            find: () => () => unit
          }
        }
      }
    })
  })
  it('should render a product form', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="productName"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="unitAutocomplete"]').exists()).toBe(true)
  })
  it('should send signal when name is changed', () => {
    const wrapper = factory()
    const productName = wrapper.find('[data-testid="productName"]')
    const name = 'toto'
    productName.vm.$emit('input', name)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].name).toBe(name)
  })
  it('should send signal when unit is changed', () => {
    const wrapper = factory()
    const unitAutocomplete = wrapper.find('[data-testid="unitAutocomplete"]')
    unitAutocomplete.vm.$emit('unit:selected', 1)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].dimension).toBe(unit.dimension)
    expect(submittedCalls[0][0].unit).toBe(unit.symbole)
  })
})
