import { mount } from '@vue/test-utils'
import FvOfferStepDetail from './index.vue'
import store from '@/.storybook/store'

describe('FvOfferStepDetail', () => {
  const factory = (propsData) => {
    return mount(FvOfferStepDetail, {
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
      mocks: {
        $t: (msg) => msg
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
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should send signal when price changed', () => {
    const wrapper = factory()
    const priceField = wrapper.find('[data-testid="priceField"]')
    priceField.vm.$emit('price:changed')
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should send signal when vat changed', () => {
    const wrapper = factory()
    const vatField = wrapper.find('[data-testid="vatField"]')
    vatField.vm.$emit('vat:changed')
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
  })
  it('should send signal when unit is selected', () => {
    const wrapper = factory()
    const unitAutocomplete = wrapper.find('[data-testid="unitAutocomplete"]')
    unitAutocomplete.vm.$emit('unit:selected')
    const submittedCalls = wrapper.emitted('payload:changed')
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
  it('should have an empty text field for product name', () => {
    const wrapper = factory()
    const textField = wrapper.find('[data-testid="textField"]')
    expect(textField.text()).toMatch('')
  })
  it('should emit an event when input changed', async () => {
    const name = 'bananes'
    const wrapper = factory()
    const textField = wrapper.find('[data-testid="textField"]')
    await textField.setValue(name)
    const inputCalls = wrapper.emitted('payload:changed')
    expect(inputCalls).toHaveLength(1)
    expect(inputCalls[0][0].name).toMatch(name)
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
