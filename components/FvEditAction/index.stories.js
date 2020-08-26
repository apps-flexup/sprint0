import { storiesOf } from '@storybook/vue'
import FvEditAction from './index.vue'

storiesOf('Atoms/FvEditAction', module).add('Common', () => ({
  components: { FvEditAction },
  methods: {
    clicked() {}
  },
  template: `<FvEditAction
    @edit:clicked="clicked"
  >
  </FvEditAction>`
}))
