import { storiesOf } from '@storybook/vue'
import { text, boolean } from '@storybook/addon-knobs'
import FvDataTableSearchBar from './index.vue'

storiesOf('Atoms/FvDataTableSearchBar', module).add('Common', () => ({
  props: {
    label: {
      default: text('Label', 'Label', 'Props')
    },
    outlined: {
      default: boolean('Outlined', true, 'Props')
    }
  },
  components: { FvDataTableSearchBar },
  methods: {
    searchChanged(_v) {}
  },
  template: `<FvDataTableSearchBar
    :label="label"
    @dataTableSearchBar:changed="searchChanged"
  >
  </FvDataTableSearchBar>`
}))
