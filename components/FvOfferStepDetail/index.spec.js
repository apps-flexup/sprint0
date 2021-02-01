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
  const payload = {
    product_id: 2,
    name: 'Appartement Paris 19',
    price: '120',
    currency: 'EUR',
    vat: '20',
    unit: 'month',
    dimension: 'duration'
  }

  const factory = (propsData) => {
    return shallowMount(FvOfferStepDetail, {
      localVue,
      store,
      propsData: {
        ...propsData,
        payload
      },
      mocks: {
        $t: (msg) => msg
      },
      computed: {
        price() {
          return payload.price
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
        },
        settings: {
          namespaced: true,
          actions: {
            getSettings: jest.fn()
          },
          getters: {
            settings: jest.fn()
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
    expect(submittedCalls[0][0].product_id).toBe(product.id)
    expect(submittedCalls[0][0].unit).toBe(product.unit)
    expect(submittedCalls[0][0].dimension).toBe(product.dimension)
    expect(submittedCalls[0][0].name).toBe(product.name)
  })
  it('should send signal when price changed', () => {
    const wrapper = factory()
    const priceField = wrapper.find('[data-testid="priceField"]')
    const price = { price: 10.5, currency: 'EUR' }
    priceField.vm.$emit('price:changed', price)
    const submittedCalls = wrapper.emitted('payload:changed')
    expect(submittedCalls).toBeTruthy()
    expect(submittedCalls).toHaveLength(1)
    expect(submittedCalls[0][0].price).toBe(price.price)
    expect(submittedCalls[0][0].currency).toBe(price.currency)
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
  it('should receive the product name', () => {
    const wrapper = factory()
    const name = payload.name
    const nameField = wrapper.find('[data-testid="nameField"]')
    expect(nameField.props().value).toBe(name)
  })
  it('should receive the product price', () => {
    const wrapper = factory()
    const price = payload.price
    const priceField = wrapper.find('[data-testid="priceField"]')
    expect(priceField.props().value).toBe(price)
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
  it('should receive the product dimension', () => {
    const wrapper = factory()
    const unitAutocomplete = wrapper.find('[data-testid="unitAutocomplete"]')
    expect(unitAutocomplete.props().dimension).toBe('duration')
  })
})
