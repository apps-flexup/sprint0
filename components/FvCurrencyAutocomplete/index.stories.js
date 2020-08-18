import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import FvCurrencyAutocomplete from './index.vue'

storiesOf('Atoms/FvCurrencyAutocomplete', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
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
    }),
    {
      info: {}
    }
  )
