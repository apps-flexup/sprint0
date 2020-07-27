import { storiesOf } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import FvCategoryAutocomplete from './index.vue'
import store from '@/.storybook/store'

storiesOf('Atoms|FvCategoryAutocomplete', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      components: { FvCategoryAutocomplete },
      store,
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
