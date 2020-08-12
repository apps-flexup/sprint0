import { storiesOf } from '@storybook/vue'
import FvOrderList from './index.vue'

storiesOf('Organism|FvOrderList', module).add(
  'Common',
  () => ({
    components: { FvOrderList },
    data() {
      return {
        search: ''
      }
    },
    template: `<FvOrderList
      :search="search"
    >
    </FvOrderList>`
  }),
  {
    info: {}
  }
)
