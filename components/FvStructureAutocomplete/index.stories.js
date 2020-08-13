import { storiesOf } from '@storybook/vue'
import FvStructureAutocomplete from './index.vue'

storiesOf('Atoms|FvStructureAutocomplete', module).add(
  'Common',
  () => ({
    components: { FvStructureAutocomplete },
    methods: {
      structureSelected(_v) {}
    },
    template: `<FvStructureAutocomplete
      @structure:selected="structureSelected"
    >
    </FvStructureAutocomplete>`
  }),
  {
    info: {}
  }
)
