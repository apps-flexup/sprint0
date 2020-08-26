import { storiesOf } from '@storybook/vue'
import { text } from '@storybook/addon-knobs'
import FvDataTableHeader from './index.vue'

storiesOf('Molecules/FvDataTableHeader', module).add('Common', () => ({
  props: {
    label: {
      default: text('Label', 'Label', 'Props')
    },
    title: {
      default: text('Title', 'Beautiful title', 'Props')
    }
  },
  components: { FvDataTableHeader },
  methods: {
    searchChanged(_v) {}
  },
  template: `<FvDataTableHeader
    :label="label"
    :title="title"
    @dataTableSearch:changed="searchChanged"
  >
  </FvDataTableHeader>`
}))
