import { storiesOf } from '@storybook/vue'
import { select } from '@storybook/addon-knobs'
import FvPartnerCard from './index.vue'

const partnersAvailable = {
  1: '1',
  6: '6',
  11: '11'
}
const defaultValue = '1'

storiesOf('Atoms/FvPartnerCard', module).add('Common', () => ({
  props: {
    partnerId: {
      default: select('Partner', partnersAvailable, defaultValue, 'Props')
    }
  },
  components: { FvPartnerCard },
  data() {
    return {
      partnerId: 1
    }
  },
  template: `<FvPartnerCard
    :partnerId="partnerId"
  >
  </FvPartnerCard>`
}))
