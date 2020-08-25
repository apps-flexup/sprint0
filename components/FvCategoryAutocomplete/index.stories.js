import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import FvCategoryAutocomplete from './index.vue'

storiesOf('Atoms/FvCategoryAutocomplete', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      components: { FvCategoryAutocomplete },
      methods: {
        selected(_v) {}
      },
      template: `<FvCategoryAutocomplete
        @category:selected="selected"
      >
      </FvCategoryAutocomplete>`
    }),
    {
      info: {}
    }
  )
