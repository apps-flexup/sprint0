import { storiesOf } from '@storybook/vue'
import { text, withKnobs, boolean } from '@storybook/addon-knobs'
import FvDataTableSearchBar from './index.vue'

storiesOf('Atoms|FvDataTableSearchBar', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      props: {
        label: {
          default: text('Label', 'Label', 'Props')
        },
        outlined: {
          default: boolean('Outlined', true, 'Props')
        }
      },
      components: { FvDataTableSearchBar },
      methods: {
        searchChanged(_v) {}
      },
      template: `<FvDataTableSearchBar
        :label="label"
        @dataTableSearchBar:changed="searchChanged"
      >
      </FvDataTableSearchBar>`
    }),
    {
      info: {}
    }
  )
