import { storiesOf } from '@storybook/vue'
import FvCountryAutocomplete from './index.vue'

storiesOf('Atoms/FvCountryAutocomplete', module).add('Common', () => ({
  components: { FvCountryAutocomplete },
  methods: {
    selected(_v) {}
  },
  template: `<FvCountryAutocomplete
    @country:selected="selected"
  >
  </FvCountryAutocomplete>`
}))
