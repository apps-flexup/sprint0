import { storiesOf } from '@storybook/vue'
import FvDeleteAction from './index.vue'

storiesOf('Atoms|FvDeleteAction', module).add(
  'Common',
  () => ({
    components: { FvDeleteAction },
    methods: {
      clicked() {}
    },
    template: `<FvDeleteAction
      @delete:clicked="clicked"
    >
    </FvDeleteAction>`
  }),
  {
    info: {}
  }
)
