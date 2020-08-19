import { storiesOf } from '@storybook/vue'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import FvModalSlot from './index.vue'

storiesOf('Molecules/FvModalSlot', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      components: { FvModalSlot },
      props: {
        show: {
          default: boolean('Show', true, 'Props')
        }
      },
      template: `<FvModalSlot
        :dialog="show"
      >
        <template slot='title'>
          <p> Beautiful title </p>
        </template>
        <template slot='form'>
          <p> Beautiful form </p>
        </template>
        <template slot='actions'>
          <p> Beautiful actions </p>
        </template>
      </FvModalSlot>`
    }),
    {
      info: {}
    }
  )
