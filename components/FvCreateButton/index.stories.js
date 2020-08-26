import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import FvCreateButton from './index.vue'

storiesOf('Atoms/FvCreateButton', module).add('Common', () => ({
  props: {
    label: {
      default: text('Label', 'Create', 'Slots')
    }
  },
  components: { FvCreateButton },
  template: `<FvCreateButton>
    {{ label }}
  </FvCreateButton>`
}))
