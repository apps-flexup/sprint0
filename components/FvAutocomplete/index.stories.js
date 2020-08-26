import { storiesOf } from '@storybook/vue'
import { text, array } from '@storybook/addon-knobs'
import FvAutocomplete from './index.vue'

storiesOf('Atoms/FvAutocomplete', module).add('Common', () => ({
  props: {
    label: {
      default: text('Label', 'Autocomplete', 'Slots')
    },
    items: {
      default: array('Items', ['item1', 'item2'], ',', 'Props')
    }
  },
  components: { FvAutocomplete },
  methods: {
    filter(item, queryText, _itemText) {
      return item.includes(queryText)
    },
    selected(_v) {}
  },
  template: `<FvAutocomplete
    :items="items"
    :filter="filter"
    @autocomplete:selected="selected"
  >
    <template v-slot:label>
      {{ label }}
    </template>
  </FvAutocomplete>`
}))
