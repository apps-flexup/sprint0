import { storiesOf } from '@storybook/vue'
import FvProductForm from './index.vue'

storiesOf('Molecules/FvProductForm', module).add('Common', () => ({
  components: { FvProductForm },
  data() {
    return {
      product: {}
    }
  },
  methods: {
    productChanged(_v) {}
  },
  template: `<FvProductForm
    :product="product"
    @product:changed="productChanged"
  >
  </FvProductForm>`
}))
