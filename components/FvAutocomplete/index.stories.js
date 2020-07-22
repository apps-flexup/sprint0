import { storiesOf } from '@storybook/vue'
import { text, array, withKnobs } from '@storybook/addon-knobs'
import FvAutocomplete from './index.vue'

storiesOf('Atoms|FvAutocomplete', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      props: {
        label: {
          default: text('Label', 'Autocomplete', 'Slots')
        },
        items: {
          default: array('Items', ['item1', 'item2'])
        }
      },
      components: { FvAutocomplete },
      template: `<FvAutocomplete>
        {{ label }}
      </FvAutocomplete>`
    }),
    {
      info: {}
    }
  )
