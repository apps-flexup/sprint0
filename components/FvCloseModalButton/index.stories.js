import { storiesOf } from '@storybook/vue'
import FvCloseModalButton from './index.vue'

storiesOf('Atoms|FvCloseModalButton', module).add(
  'Common',
  () => ({
    components: { FvCloseModalButton },
    methods: {
      close() {}
    },
    template: `<FvCloseModalButton
      @button:close="close"
    >
    </FvCloseModalButton>`
  }),
  {
    info: {}
  }
)
