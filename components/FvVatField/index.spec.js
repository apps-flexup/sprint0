import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvVatField from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const vat = 20
let store
const factory = () => {
  return mount(FvVatField, {
    localVue,
    store
  })
}

beforeEach(() => {
  store = new Vuex.Store({
    modules: {
      settings: {
        namespaced: true,
        actions: {
          getSettings: jest.fn()
        },
        getters: {
          settings: () => jest.fn()
        }
      }
    }
  })
})

describe('FvVatField', () => {
  it('should render a vat field', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="vatField"]').exists()).toBe(true)
  })
  it('should emit an event when vat change', () => {
    const wrapper = factory()
    const vatField = wrapper.find('[data-testid="vatField"]')
    vatField.vm.$emit('input', vat)
    const submittedCalls = wrapper.emitted('vat:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toBe(vat)
  })
  it('should emit a generic event when vat change', () => {
    const wrapper = factory()
    const vatField = wrapper.find('[data-testid="vatField"]')
    vatField.vm.$emit('input', vat)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toBe(vat)
  })
  it('should change vat when click outside', async () => {
    const wrapper = factory()
    const vatField = wrapper.find('[data-testid="vatField"]')
    await wrapper.setData({ vat })
    vatField.vm.$emit('click:outside', vat)
    const expectedVat = parseFloat(vat).toFixed(1)
    const submittedCalls = wrapper.emitted('vat:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0]).toBe(expectedVat)
  })
})
