import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import FvCountryAutocomplete from './index.vue'
import store from '@/.storybook/store'

storiesOf('Atoms|FvCountryAutocomplete', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      components: { FvCountryAutocomplete },
      store,
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
