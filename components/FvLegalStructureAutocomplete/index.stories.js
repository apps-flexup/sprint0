import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import FvLegalStructureAutocomplete from './index.vue'

storiesOf('Atoms|FvLegalStructureAutocomplete', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
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
    }),
    {
      info: {}
    }
  )
