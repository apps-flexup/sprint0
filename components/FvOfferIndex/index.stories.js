import { storiesOf } from '@storybook/vue'
import FvOfferIndex from './index.vue'

storiesOf('Pages|FvOfferIndex', module).add(
  'Common',
  () => ({
    components: { FvOfferIndex },
    template: `<FvOfferIndex>
    </FvOfferIndex>`
  }),
  {
    info: {}
  }
)
