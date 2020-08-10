import { storiesOf } from '@storybook/vue'
import FvPartnerDataTable from './index.vue'

storiesOf('Molecules|FvPartnerDataTable', module).add(
  'Common',
  () => ({
    components: { FvPartnerDataTable },
    data() {
      return {
        search: ''
      }
    },
    template: `<FvPartnerDataTable
      :search="search"
    >
    </FvPartnerDataTable>`
  }),
  {
    info: {}
  }
)
