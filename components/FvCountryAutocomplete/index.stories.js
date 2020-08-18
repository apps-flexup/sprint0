import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import FvCountryAutocomplete from './index.vue'

storiesOf('Atoms/FvCountryAutocomplete', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      components: { FvCountryAutocomplete },
      methods: {
        selected(_v) {}
      },
      template: `<FvCountryAutocomplete
        @country:selected="selected"
      >
      </FvCountryAutocomplete>`
    }),
    {
      info: {}
    }
  )
