import { storiesOf } from '@storybook/vue'
import { text, select } from '@storybook/addon-knobs'
import FvAccount from './index.vue'

const avatarAvailable = {
  avatar0: '/images/avatar-0.png',
  avatar1: '/images/avatar-1.png',
  avatar2: '/images/avatar-2.png',
  avatar3: '/images/avatar-3.png',
  avatar4: '/images/avatar-4.png',
  avatar5: '/images/avatar-5.png'
}
const defaultAvatar = '/images/avatar-0.png'

storiesOf('Atoms/FvAccount', module).add('Common', () => ({
  props: {
    name: {
      default: text('Name', 'fred', 'Props')
    },
    avatar: {
      default: select('Avatar', avatarAvailable, defaultAvatar, 'Props')
    }
  },
  components: { FvAccount },
  template: `<FvAccount
    :name="name"
    :avatar="avatar"
    >
    </FvAccount>`
}))
