import { storiesOf } from '@storybook/vue'
import FvCurrencyAutocomplete from './index.vue'

storiesOf('Atoms/FvCurrencyAutocomplete', module).add('Common', () => ({
  components: { FvCurrencyAutocomplete },
  methods: {
    selected(_v) {}
  },
  template: `
  <div>
    <FvCurrencyAutocomplete
      @currency:selected="selected"
    >
    </FvCurrencyAutocomplete>
  </div>`
}))
