import { storiesOf } from '@storybook/vue'
import FvNavBar from './index.vue'

storiesOf('Molecules|FvNavBar', module).add(
  'Common',
  () => ({
    components: { FvNavBar },

    template: `<FvNavBar>
    </FvNavBar>`
  }),
  {
    info: {}
  }
)
