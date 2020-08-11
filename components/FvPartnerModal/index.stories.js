import { storiesOf } from '@storybook/vue'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import FvPartnerModal from './index.vue'

storiesOf('Organism|FvPartnerModal', module)
  .addDecorator(withKnobs)
  .add(
    'Common',
    () => ({
      props: {
        showModal: {
          default: boolean('ShowModal', true, 'Props')
        }
      },
      components: { FvPartnerModal },
      data() {
        return {
          partner: {}
        }
      },
      methods: {
        close() {
          this.partner = {}
          this.showModal = false
        },
        save() {
          this.partner = {}
          this.showModal = false
        },
        partnerChanged(partner) {
          this.partner = partner
        }
      },
      template: `<FvPartnerModal
        :show="showModal"
        :partner="partner"
        @modal:close="close"
        @modal:save="save"
        @partner:changed="partnerChanged"
      >
      </FvPartnerModal>`
    }),
    {
      info: {}
    }
  )
