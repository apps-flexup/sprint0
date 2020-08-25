import { storiesOf } from '@storybook/vue'
import FvLogoutButton from './index.vue'

storiesOf('Atoms/FvLogoutButton', module).add(
  'Common',
  () => ({
    components: { FvLogoutButton },
    methods: {
      logout() {
        console.log('logout')
      }
    },
    template: `<FvLogoutButton
      @logoutButton:clicked="logout"
    >
    </FvLogoutButton>`
  }),
  {
    info: {}
  }
)
