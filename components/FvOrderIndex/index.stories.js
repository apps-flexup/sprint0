import { storiesOf } from '@storybook/vue'
import FvOrderIndex from './index.vue'

storiesOf('Pages|FvOrderIndex', module).add(
  'Common',
  () => ({
    components: { FvOrderIndex },
    template: `<FvOrderIndex>
    </FvOrderIndex>`
  }),
  {
    info: {}
  }
)
