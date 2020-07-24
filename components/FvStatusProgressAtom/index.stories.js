import { storiesOf } from '@storybook/vue'
import { select, withKnobs } from '@storybook/addon-knobs'
import FvStatusProgressAtom from './index.vue'

const statusAvailable = {
  active: 'active',
  archived: 'archived',
  draft: 'draft',
  inactive: 'inactive',
  reserved: 'reserved',
  suspended: 'suspended'
}
const defaultValue = 'draft'

storiesOf('Atoms|FvStatusProgress', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      props: {
        status: {
          default: select('Status', statusAvailable, defaultValue, 'Props')
        }
      },
      components: { FvStatusProgressAtom },
      template: `<FvStatusProgressAtom
        :status="status"
      >
      </FvStatusProgressAtom>`
    }),
    {
      info: {}
    }
  )
