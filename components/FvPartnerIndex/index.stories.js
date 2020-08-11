import { storiesOf } from '@storybook/vue'
import FvPartnerIndex from './index.vue'

storiesOf('Pages|FvPartnerIndex', module).add(
  'Common',
  () => ({
    components: { FvPartnerIndex },
    template: `<FvPartnerIndex>
    </FvPartnerIndex>`
  }),
  {
    info: {}
  }
)
