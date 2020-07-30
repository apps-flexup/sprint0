import { storiesOf } from '@storybook/vue'
import { text, withKnobs } from '@storybook/addon-knobs'
import FvDataTableHeader from './index.vue'

storiesOf('Atoms|FvDataTableHeader', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      props: {
        label: {
          default: text('Label', 'Label', 'Props')
        },
        title: {
          default: text('Title', 'Beautiful title', 'Props')
        }
      },
      components: { FvDataTableHeader },
      methods: {
        searchChanged(_v) {}
      },
      template: `<FvDataTableHeader
        :label="label"
        :title="title"
        @dataTableSearch:changed="searchChanged"
      >
      </FvDataTableHeader>`
    }),
    {
      info: {}
    }
  )
