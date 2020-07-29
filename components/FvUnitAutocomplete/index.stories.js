import { storiesOf } from '@storybook/vue'
import FvUnitAutocomplete from './index.vue'

storiesOf('Atoms|FvUnitAutocomplete', module).add(
  'Common',
  () => ({
    components: { FvUnitAutocomplete },
    methods: {
      selected(_v) {}
    },
    template: `<FvUnitAutocomplete
      @unit:selected="selected"
    >
    </FvUnitAutocomplete>`
  }),
  {
    info: {}
  }
)
