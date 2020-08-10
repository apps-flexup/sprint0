import { storiesOf } from '@storybook/vue'
import FvPartnerList from './index.vue'

storiesOf('Organism|FvPartnerList', module).add(
  'Common',
  () => ({
    components: { FvPartnerList },
    data() {
      return {
        search: ''
      }
    },
    template: `<FvPartnerList
      :search="search"
    >
    </FvPartnerList>`
  }),
  {
    info: {}
  }
)
