import { storiesOf } from '@storybook/vue'
import { select, withKnobs } from '@storybook/addon-knobs'
import FvAvatar from './index.vue'

const statusAvailable = {
  avatar0: '/images/avatar-0.png',
  avatar1: '/images/avatar-1.png',
  avatar2: '/images/avatar-2.png',
  avatar3: '/images/avatar-3.png',
  avatar4: '/images/avatar-4.png',
  avatar5: '/images/avatar-5.png'
}
const defaultValue = '/images/avatar-0.png'

storiesOf('Atoms|FvAvatar', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      props: {
        status: {
          default: select('Status', statusAvailable, defaultValue, 'Props')
        }
      },
      components: { FvAvatar },
      template: `<FvAvatar
        :avatar="status"
      >
      </FvAvatar>`
    }),
    {
      info: {}
    }
  )
