import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'Vuex'
import FvOfferStepDetail from './index.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('FvOfferStepDetail', () => {
  let store
  const unit = {
    base: 'year',
    default: true,
    dimension: 'age',
    id: 1,
    symbole: 'year',
    unit_per_base: 1
  }
  const product = {
    id: 1,
    unit: unit.symbole,
    dimension: unit.dimension,
    name: 'test'
  }

  const factory = (propsData) => {
    return shallowMount(FvOfferStepDetail, {
      localVue,
      store,
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
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        units: {
          namespaced: true,
          getters: {
            find: () => () => unit
          }
        },
        products: {
          namespaced: true,
          actions: {
            get: jest.fn()
          },
          getters: {
            findById: () => () => product
          }
        }
      }
    })
  })
  it('should render an offer step detail', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="productAutocomplete"]').exists()).toBe(
      true
    )
    expect(wrapper.find('[data-testid="nameField"]').exists()).toBe(true)
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
    const price = 10.5
    priceField.vm.$emit('price:changed', price)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].price).toBe(price)
  })
  it('should send signal when vat changed', () => {
    const wrapper = factory()
    const vatField = wrapper.find('[data-testid="vatField"]')
    const vat = 20
    vatField.vm.$emit('vat:changed', vat)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].vat).toBe(vat)
  })
  it('should send signal when unit is selected', () => {
    const wrapper = factory()
    const unitAutocomplete = wrapper.find('[data-testid="unitAutocomplete"]')
    unitAutocomplete.vm.$emit('unit:selected', 1)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].dimension).toBe(unit.dimension)
    expect(submittedCalls[0][0].unit).toBe(unit.symbole)
  })
  it('should emit an event when name changed', () => {
    const wrapper = factory()
    const nameField = wrapper.find('[data-testid="nameField"]')
    const name = 'bananes'
    nameField.vm.$emit('input', name)
    const inputCalls = wrapper.emitted('payload:changed')
    expect(inputCalls).toBeTruthy()
    expect(inputCalls).toHaveLength(1)
    expect(inputCalls[0][0].name).toBe(name)
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
    const nameField = wrapper.find('[data-testid="nameField"]')
    expect(nameField.text()).toMatch('')
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
