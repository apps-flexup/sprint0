import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvProductStepDetail from './index.vue'
import i18n from '~/.storybook/i18n'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvProductStepDetail', () => {
  let store

  const factory = () => {
    return shallowMount(FvProductStepDetail, {
      localVue,
      i18n,
      store
    })
  }
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        units: {
          namespaced: true,
          getters: {
            find: () => jest.fn()
          }
        }
      }
    })
  })
  it('should render a product form', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="categoryAutocomplete"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-testid="productName"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="unitAutocomplete"]').exists()).toBe(true)
  })
  it('should send signal when category is changed', () => {
    const wrapper = factory()
    const categoryAutocomplete = wrapper.find(
      '[data-testid="categoryAutocomplete"]'
    )
    categoryAutocomplete.vm.$emit('category:selected')
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should send signal when name is changed', () => {
    const wrapper = factory()
    const productName = wrapper.find('[data-testid="productName"]')
    productName.vm.$emit('input')
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should send signal when unit is changed', () => {
    const wrapper = factory()
    const unitAutocomplete = wrapper.find('[data-testid="unitAutocomplete"]')
    unitAutocomplete.vm.$emit('unit:selected')
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
})
