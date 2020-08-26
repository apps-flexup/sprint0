import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import FvTextField from './index.vue'

storiesOf('Atoms/FvTextField', module).add('Common', () => ({
  props: {
    label: {
      default: text('Label', 'Label', 'Props')
    },
    outlined: {
      default: boolean('Outlined', true, 'Props')
    }
  },
  components: { FvTextField },
  methods: {
    inputChanged(_v) {}
  },
  template: `<FvTextField
    :label="label"
    :outlined="outlined"
    @input="inputChanged"
  >
  </FvTextField>`
}))
