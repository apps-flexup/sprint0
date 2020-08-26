import { storiesOf } from '@storybook/vue'
import FvProductList from './index.vue'

storiesOf('Organism/FvProductList', module).add('Common', () => ({
  components: { FvProductList },
  template: `<FvProductList>
  </FvProductList>`
}))
