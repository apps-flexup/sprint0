import { storiesOf } from '@storybook/vue'
import FvModalActions from './index.vue'

storiesOf('Molecules/FvModalActions', module).add(
  'Common',
  () => ({
    components: { FvModalActions },
    methods: {
      close() {},
      save() {}
    },
    template: `<FvModalActions
      @modal:actions:close="close"
      @modal:actions:save="save"
    >
    </FvModalActions>`
  }),
  {
    info: {}
  }
)
