import { mount, createLocalVue } from '@vue/test-utils'
import AsyncComputed from 'vue-async-computed'
import FvPriceToPreferredCurrency from './index.vue'

const localVue = createLocalVue()
localVue.use(AsyncComputed)

const $displayRules = {
  priceToPreferredCurrency: () => 'convertedPrice',
}

const factory = () => {
  return mount(FvPriceToPreferredCurrency, {
    localVue,
    mocks: {
      $displayRules,
    },
  })
}

describe('FvPriceToPreferredCurrency', () => {
  it('should render a fv price to preferred currency', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="price"]').exists()).toBe(true)
  })
  it('should display the converted price', async () => {
    const wrapper = factory()
    const price = wrapper.find('[data-testid="price"]')
    // Ugly fix to wait enough help to FIXME
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(price.text()).toBe('convertedPrice')
  })
})
