import { shallowMount } from '@vue/test-utils'
import FvSettingsOthers from './index.vue'

const settings = {
  price_nb_after_decimal_point: 2,
  default_vat: 20,
  vat_nb_after_decimal_point: 1
}

const $activeAccount = {
  settings: () => settings,
  setSettings: jest.fn()
}

const factory = () => {
  return shallowMount(FvSettingsOthers, {
    mocks: {
      $t: (msg) => msg,
      $activeAccount
    }
  })
}

beforeEach(() => {
  jest.clearAllMocks()
})

describe('FvSettingsOthers', () => {
  it('should render a fv settings others', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="priceNbDigits"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="vatNbDigits"]').exists()).toBeTruthy()
    expect(wrapper.find('[data-testid="defaultVat"]').exists()).toBeTruthy()
  })
  it('should call active account set settings with new settings when price nb digits is selected', () => {
    const wrapper = factory()
    const priceNbDigits = wrapper.find('[data-testid="priceNbDigits"]')
    const nbDigits = 3
    const expectedSettings = {
      price_nb_after_decimal_point: nbDigits,
      default_vat: settings.default_vat,
      vat_nb_after_decimal_point: settings.vat_nb_after_decimal_point
    }
    priceNbDigits.vm.$emit('input', nbDigits)
    expect($activeAccount.setSettings).toHaveBeenCalledTimes(1)
    expect($activeAccount.setSettings).toHaveBeenCalledWith(expectedSettings)
  })
  it('should call active account set settings with new settings when default vat is selected', () => {
    const wrapper = factory()
    const vatNbDigits = wrapper.find('[data-testid="defaultVat"]')
    const defaultVat = 5
    const expectedSettings = {
      price_nb_after_decimal_point: settings.price_nb_after_decimal_point,
      default_vat: defaultVat,
      vat_nb_after_decimal_point: settings.vat_nb_after_decimal_point
    }
    vatNbDigits.vm.$emit('input', defaultVat)
    expect($activeAccount.setSettings).toHaveBeenCalledTimes(1)
    expect($activeAccount.setSettings).toHaveBeenCalledWith(expectedSettings)
  })
  it('should call active account set settings with new settings when price nb digits is selected', () => {
    const wrapper = factory()
    const vatNbDigits = wrapper.find('[data-testid="vatNbDigits"]')
    const nbDigits = 3
    const expectedSettings = {
      price_nb_after_decimal_point: settings.price_nb_after_decimal_point,
      default_vat: settings.default_vat,
      vat_nb_after_decimal_point: nbDigits
    }
    vatNbDigits.vm.$emit('input', nbDigits)
    expect($activeAccount.setSettings).toHaveBeenCalledTimes(1)
    expect($activeAccount.setSettings).toHaveBeenCalledWith(expectedSettings)
  })
})
