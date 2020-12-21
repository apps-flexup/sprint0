import { mount } from '@vue/test-utils'
import FvOfferStepDetail from './index.vue'
import i18n from '~/.storybook/i18n'
import store from '@/.storybook/store'

describe('FvOfferStepDetail', () => {
  const factory = (propsData) => {
    return mount(FvOfferStepDetail, {
      i18n,
      store,
      stubs: {
        FvUnitAutocomplete: true,
        FvProductAutocomplete: true,
        FvPriceField: true,
        FvVatField: true
      },
      propsData: {
        ...propsData
      },
      data() {
        return {
          localOffer: {},
          productId: 2,
          name: 'Appartement Paris 19',
          price: '120',
          currency: null,
          vat: '20',
          unit: 'month',
          dimension: null
        }
      }
    })
  }
  it('should render an offer form', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="productAutocomplete"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-testid="textField"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="unitAutocomplete"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="vatField"]').exists()).toBe(true)
    expect(wrapper.find('[data-testid="priceField"]').exists()).toBe(true)
  })
  it('should send signal when product is selected', () => {
    const wrapper = factory()
    const productAutocomplete = wrapper.find(
      '[data-testid="productAutocomplete"]'
    )
    productAutocomplete.vm.$emit('products:selected')
    const submittedCalls = wrapper.emitted('offer:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should receive the product id', () => {
    const wrapper = factory()
    const productAutocomplete = wrapper.find(
      '[data-testid="productAutocomplete"]'
    )
    expect(productAutocomplete.props().product).toBe(2)
  })
  it('should receive the product name', () => {
    const wrapper = factory()
    const textField = wrapper.find('[data-testid="textField"]')
    expect(textField.props()).toMatch('120')
  })
  it('should receive the product price', () => {
    const wrapper = factory()
    const priceField = wrapper.find('[data-testid="priceField"]')
    expect(priceField.props().value).toBe('120')
  })
  it('should receive the product VAT', () => {
    const wrapper = factory()
    const vatField = wrapper.find('[data-testid="vatField"]')
    expect(vatField.props().value).toBe('20')
  })
  it('should receive the product unit', () => {
    const wrapper = factory()
    const unitAutocomplete = wrapper.find('[data-testid="unitAutocomplete"]')
    expect(unitAutocomplete.props().unit).toBe('month')
  })
})
