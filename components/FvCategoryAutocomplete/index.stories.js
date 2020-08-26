import { storiesOf } from '@storybook/vue'
import FvCategoryAutocomplete from './index.vue'

storiesOf('Atoms/FvCategoryAutocomplete', module).add('Common', () => ({
  components: { FvCategoryAutocomplete },
  methods: {
    selected(_v) {}
  },
  template: `<FvCategoryAutocomplete
    @category:selected="selected"
  >
  </FvCategoryAutocomplete>`
}))
