import { storiesOf } from '@storybook/vue'
import FvMinusButton from './index.vue'

storiesOf('Atoms/FvMinusButton', module).add(
  'Common',
  () => ({
    components: { FvMinusButton },
    methods: {
      minus() {}
    },
    template: `<FvMinusButton
      @button:minus="minus"
    >
    </FvMinusButton>`
  }),
  {
    info: {}
  }
)
