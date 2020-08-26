import { storiesOf } from '@storybook/vue'
import { boolean } from '@storybook/addon-knobs'
import FvProductModal from './index.vue'

storiesOf('Organism/FvProductModal', module).add('Common', () => ({
  props: {
    showModal: {
      default: boolean('ShowModal', true, 'Props')
    }
  },
  components: { FvProductModal },
  data() {
    return {
      product: {}
    }
  },
  methods: {
    close() {
      this.product = {}
      this.showModal = false
    },
    save() {
      this.product = {}
      this.showModal = false
    },
    productChanged(product) {
      this.product = product
    }
  },
  template: `<FvProductModal
    :show="showModal"
    :product="product"
    @modal:close="close"
    @modal:save="save"
    @product:changed="productChanged"
  >
  </FvProductModal>`
}))
