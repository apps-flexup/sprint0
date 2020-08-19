import { storiesOf } from '@storybook/vue'
import FvNewPartnerForm from './index.vue'

storiesOf('Molecules/FvNewPartnerForm', module).add(
  'Common',
  () => ({
    components: { FvNewPartnerForm },
    data() {
      return {
        partner: {}
      }
    },
    methods: {
      partnerChanged(_v) {}
    },
    template: `<FvNewPartnerForm
      :partner="partner"
      @partner:changed="partnerChanged"
    >
    </FvNewPartnerForm>`
  }),
  {
    info: {}
  }
)
