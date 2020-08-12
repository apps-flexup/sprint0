import { storiesOf } from '@storybook/vue'
import FvOrderDataTable from './index.vue'

storiesOf('Molecules|FvOrderDataTable', module).add(
  'Common',
  () => ({
    components: { FvOrderDataTable },
    data() {
      return {
        search: ''
      }
    },
    template: `<FvOrderDataTable
      :search="search"
    >
    </FvOrderDataTable>`
  }),
  {
    info: {}
  }
)
