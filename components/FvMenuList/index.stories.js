import { storiesOf } from '@storybook/vue'
import FvMenuList from './index.vue'

storiesOf('Molecules/FvMenuList', module).add('Common', () => ({
  components: { FvMenuList },
  template: `<FvMenuList>
  </FvMenuList>`
}))
