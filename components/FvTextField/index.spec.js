import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvTextField from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store
const factory = () => {
  return mount(FvTextField, {
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

describe('FvTextField', () => {
  it('should render a text field', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="textField"]').exists()).toBe(true)
  })
  it('should emit an event when click', () => {
    const wrapper = factory()
    const textField = wrapper.find('[data-testid="textField"]')
    textField.trigger('click')
    const submittedCalls = wrapper.emitted('click')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should display empty string by default', () => {
    const wrapper = factory()
    const textField = wrapper.find('[data-testid="textField"]')
    expect(textField.text()).toMatch('')
  })
  it('should emit an event when input changed', async () => {
    const text = 'helloWorld'
    const wrapper = factory()
    const textField = wrapper.find('[data-testid="textField"]')
    await textField.setValue(text)
    const inputCalls = wrapper.emitted('input')
    expect(inputCalls).toHaveLength(1)
    expect(inputCalls[0][0]).toMatch(text)
  })
  it('should emit a generic event when input changed', async () => {
    const text = 'helloWorld'
    const wrapper = factory()
    const textField = wrapper.find('[data-testid="textField"]')
    await textField.setValue(text)
    const inputCalls = wrapper.emitted('payload:changed')
    expect(inputCalls).toHaveLength(1)
    expect(inputCalls[0][0]).toMatch(text)
  })
})
