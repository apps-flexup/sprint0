import { storiesOf } from '@storybook/vue'
import FvPartnerAutocomplete from './index.vue'

storiesOf('Atoms/FvPartnerAutocomplete', module).add(
  'Common',
  () => ({
    components: { FvPartnerAutocomplete },
    data() {
      return {
        partnerId: null
      }
    },
    methods: {
      partnerSelected(_v) {}
    },
    template: `<FvPartnerAutocomplete
      :partnerId="partnerId"
      @partner:selected='partnerSelected'
    >
    </FvPartnerAutocomplete>`
  }),
  {
    info: {}
  }
)
