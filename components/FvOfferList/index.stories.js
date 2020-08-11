import { storiesOf } from '@storybook/vue'
import FvOfferList from './index.vue'

storiesOf('Organism|FvOfferList', module).add(
  'Common',
  () => ({
    components: { FvOfferList },
    data() {
      return {
        search: ''
      }
    },
    template: `<FvOfferList
      :search="search"
    >
    </FvOfferList>`
  }),
  {
    info: {}
  }
)
