import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import FvFormeJuridiqueAutocomplete from './index.vue'

storiesOf('Atoms|FvFormeJuridiqueAutocomplete', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      components: { FvFormeJuridiqueAutocomplete },
      methods: {
        selected(_v) {}
      },
      template: `
      <div>
        <FvFormeJuridiqueAutocomplete
          @legalstructure:selected="selected"
        >
        </FvFormeJuridiqueAutocomplete>
      </div>`
    }),
    {
      info: {}
    }
  )
