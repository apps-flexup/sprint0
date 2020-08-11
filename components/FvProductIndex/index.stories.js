import { storiesOf } from '@storybook/vue'
import FvProductIndex from './index.vue'

storiesOf('Pages|FvProductIndex', module).add(
  'Common',
  () => ({
    components: { FvProductIndex },
    template: `<FvProductIndex>
    </FvProductIndex>`
  }),
  {
    info: {}
  }
)
