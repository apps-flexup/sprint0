import { storiesOf } from '@storybook/vue'
import FvPlusButton from './index.vue'

storiesOf('Atoms|FvPlusButton', module).add(
  'Common',
  () => ({
    components: { FvPlusButton },
    methods: {
      plus() {}
    },
    template: `<FvPlusButton
      @button:plus="plus"
    >
    </FvPlusButton>`
  }),
  {
    info: {}
  }
)
