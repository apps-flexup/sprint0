import { storiesOf } from '@storybook/vue'
import FvOfferAutocomplete from './index.vue'

storiesOf('Atoms|FvOfferAutocomplete', module).add(
  'Common',
  () => ({
    components: { FvOfferAutocomplete },
    methods: {
      selected(_v) {}
    },
    template: `
    <div>
      <FvOfferAutocomplete
        :partnerId="5"
        @offers:selected="selected"
      >
      </FvOfferAutocomplete>
    </div>`
  }),
  {
    info: {}
  }
)
