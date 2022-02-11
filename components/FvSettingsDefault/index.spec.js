import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import FvSettingsDefault from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

let store

const settings = {
  currency: 'EUR',
  locale: 'fr',
  theme: 'light',
}

const $activeAccount = {
  settings: () => settings,
  setSettings: jest.fn(),
}

const factory = () => {
  return shallowMount(FvSettingsDefault, {
    localVue,
    store,
    mocks: {
      $activeAccount,
    },
  })
}

beforeEach(() => {
  jest.clearAllMocks()
  store = new Vuex.Store({
    modules: {
      settings: {
        namespaced: true,
        actions: {
          getSettings: jest.fn(),
        },
      },
    },
  })
})

describe('FvSettingsDefault', () => {
  it('should render a fv settings default', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="languageAutocomplete"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="currencyAutocomplete"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="themeAutocomplete"]').exists()).toBeTruthy()
  })
  it('should call active account set settings with new settings when language is selected', () => {
    const wrapper = factory()
    const languageAutocomplete = wrapper.find('[data-testid="languageAutocomplete"]')
    const locale = 'en'
    const expectedSettings = {
      locale,
      currency: settings.currency,
      theme: settings.theme,
    }
    languageAutocomplete.vm.$emit('language:selected', locale)
    expect($activeAccount.setSettings).toHaveBeenCalledTimes(1)
    expect($activeAccount.setSettings).toHaveBeenCalledWith(expectedSettings)
  })
  it('should call active account set settings with new settings when currency is selected', () => {
    const wrapper = factory()
    const currencyAutocomplete = wrapper.find('[data-testid="currencyAutocomplete"]')
    const currency = 'USD'
    const expectedSettings = {
      locale: settings.locale,
      currency,
      theme: settings.theme,
    }
    currencyAutocomplete.vm.$emit('currency:selected', currency)
    expect($activeAccount.setSettings).toHaveBeenCalledTimes(1)
    expect($activeAccount.setSettings).toHaveBeenCalledWith(expectedSettings)
  })
  it('should call active account set settings with new settings when theme is selected', () => {
    const wrapper = factory()
    const themeAutocomplete = wrapper.find('[data-testid="themeAutocomplete"]')
    const theme = 'dark'
    const expectedSettings = {
      locale: settings.locale,
      currency: settings.currency,
      theme,
    }
    themeAutocomplete.vm.$emit('theme:selected', theme)
    expect($activeAccount.setSettings).toHaveBeenCalledTimes(1)
    expect($activeAccount.setSettings).toHaveBeenCalledWith(expectedSettings)
  })
})
