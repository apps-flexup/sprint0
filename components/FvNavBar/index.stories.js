import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import FvNavBar from './index.vue'

storiesOf('Molecules/FvNavBar', module).add(
  'Common',
  () => ({
    props: {
      title: {
        default: text('Title', 'Navbar title', 'Slots')
      }
    },
    components: { FvNavBar },
    template: `<FvNavBar
      :title="title"
    >
    </FvNavBar>`
  }),
  {
    info: {}
  }
)
