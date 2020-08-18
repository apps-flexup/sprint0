import { storiesOf } from '@storybook/vue'
import FvLoginButton from './index.vue'

storiesOf('Atoms|FvLoginButton', module).add(
  'Common',
  () => ({
    components: { FvLoginButton },
    methods: {
      login() {
        console.log('login')
      }
    },
    template: `<FvLoginButton
      @loginButton:clicked="login"
    >
    </FvLoginButton>`
  }),
  {
    info: {}
  }
)
