import { storiesOf } from '@storybook/vue'
import FvSaveModalButton from './index.vue'

storiesOf('Atoms/FvSaveModalButton', module).add(
  'Common',
  () => ({
    components: { FvSaveModalButton },
    methods: {
      save() {}
    },
    template: `<FvSaveModalButton
      @button:save="save"
    >
    </FvSaveModalButton>`
  }),
  {
    info: {}
  }
)
