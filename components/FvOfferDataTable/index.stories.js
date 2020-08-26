import { storiesOf } from '@storybook/vue'
import FvOfferDataTable from './index.vue'

storiesOf('Molecules/FvOfferDataTable', module).add('Common', () => ({
  components: { FvOfferDataTable },
  data() {
    return {
      search: ''
    }
  },
  template: `<FvOfferDataTable
    :search="search"
  >
  </FvOfferDataTable>`
}))
