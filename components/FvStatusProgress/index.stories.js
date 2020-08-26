import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'
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

storiesOf('Atoms/FvStatusProgress', module).add('Common', () => ({
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
}))
