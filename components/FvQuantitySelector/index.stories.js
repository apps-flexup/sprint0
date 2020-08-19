import { storiesOf } from '@storybook/vue'
import FvQuantitySelector from './index.vue'

storiesOf('Molecules/FvQuantitySelector', module).add(
  'Common',
  () => ({
    components: { FvQuantitySelector },
    data() {
      return {
        quantity: 1
      }
    },
    methods: {
      plus() {
        this.quantity += 1
      },
      minus() {
        this.quantity -= 1
      }
    },
    template: `<FvQuantitySelector
      :quantity="quantity"
      @quantitySelector:plus="plus"
      @quantitySelector:minus="minus"
    >
    </FvQuantitySelector>`
  }),
  {
    info: {}
  }
)
