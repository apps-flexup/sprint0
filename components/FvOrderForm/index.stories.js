import { storiesOf } from '@storybook/vue'
import FvOrderForm from './index.vue'

storiesOf('Molecules/FvOrderForm', module).add('Common', () => ({
  components: { FvOrderForm },
  data() {
    return {
      order: {}
    }
  },
  methods: {
    orderChanged(_v) {}
  },
  template: `<FvOrderForm
    :order="order"
    @order:changed="orderChanged"
    >
    </FvOrderForm>`
}))
