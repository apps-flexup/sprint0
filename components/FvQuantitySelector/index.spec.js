import { mount } from '@vue/test-utils'
import Vue from 'vue'
import vuetify from 'vuetify'
import FvQuantitySelector from './index.vue'

describe('FvQuantitySelector', () => {
  beforeEach(() => {
    Vue.use(vuetify)
  })
  it('should render a quantity selector', () => {
    const wrapper = mount(FvQuantitySelector)
    expect(wrapper.find('[data-testid="quantitySelector"]').exists()).toBe(true)
  })
})
