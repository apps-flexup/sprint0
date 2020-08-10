import { storiesOf } from '@storybook/vue'
import FvProductsIndex from './index.vue'

storiesOf('Pages|FvProductsIndex', module).add(
  'Common',
  () => ({
    components: { FvProductsIndex },
    template: `<FvProductsIndex>
    </FvProductsIndex>`
  }),
  {
    info: {}
  }
)
