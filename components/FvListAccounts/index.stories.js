import { storiesOf } from '@storybook/vue'
import FvListAccounts from './index.vue'

storiesOf('Atoms/FvListAccounts', module).add('Common', () => ({
  components: { FvListAccounts },
  template: `<FvListAccounts>
  </FvListAccounts>`
}))
