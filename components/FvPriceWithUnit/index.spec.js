import { mount, createLocalVue } from '@vue/test-utils'
import AsyncComputed from 'vue-async-computed'
import FvPriceWithUnit from './index.vue'

const localVue = createLocalVue()
localVue.use(AsyncComputed)

const $displayRules = {
  priceWithUnit: () => 'priceWithUnit',
}

const factory = () => {
  return mount(FvPriceWithUnit, {
    localVue,
    mocks: {
      $displayRules,
    },
  })
}

describe('FvPriceWithUnit', () => {
  it('should render a price with unit', () => {
    const wrapper = factory()
    expect(wrapper.find('[data-testid="price"]').exists()).toBeTruthy()
  })
  it('should display the result of display rule price with unit', async () => {
    const wrapper = factory()
    const price = wrapper.find('[data-testid="price"]')
    // Ugly fix to wait enough help to FIXME
    await wrapper.vm.$nextTick()
    await wrapper.vm.$nextTick()
    expect(price.text()).toBe('priceWithUnit')
  })
})
