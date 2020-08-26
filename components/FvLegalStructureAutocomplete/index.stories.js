import { storiesOf } from '@storybook/vue'
import FvLegalStructureAutocomplete from './index.vue'

storiesOf('Atoms/FvLegalStructureAutocomplete', module).add('Common', () => ({
  components: { FvLegalStructureAutocomplete },
  methods: {
    selected(_v) {}
  },
  template: `
  <div>
    <FvLegalStructureAutocomplete
      @legalstructure:selected="selected"
    >
    </FvLegalStructureAutocomplete>
  </div>`
}))
