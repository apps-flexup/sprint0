import { storiesOf } from '@storybook/vue'
import FvProductDataTable from './index.vue'

storiesOf('Molecules/FvProductDataTable', module).add('Common', () => ({
  components: { FvProductDataTable },
  data() {
    return {
      search: ''
    }
  },
  template: `<FvProductDataTable
    :search="search"
  >
  </FvProductDataTable>`
}))
