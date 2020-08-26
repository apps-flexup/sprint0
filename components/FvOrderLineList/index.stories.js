import { storiesOf } from '@storybook/vue'
import FvOrderLineList from './index.vue'

storiesOf('Organism/FvOrderLineList', module).add('Common', () => ({
  components: { FvOrderLineList },
  data() {
    return {
      orderLines: [
        {
          offer_id: 1,
          offer: {
            en: 'Goat milk',
            fr: 'Lait de chêvre'
          },
          status: 'draft',
          quantity: 1,
          pas: 1,
          vat: 20,
          dimension: 'volume',
          unit: 'm³',
          currency: 'EUR',
          amount() {
            const res = parseFloat(this.quantity) * parseFloat(this.price)
            return res
          },
          price: 100
        },
        {
          offer_id: 2,
          offer: {
            en: 'my beautifiul offer'
          },
          status: 'draft',
          quantity: 1,
          pas: 1,
          vat: 10,
          dimension: 'duration',
          unit: 'day',
          currency: 'EUR',
          amount() {
            const res = parseFloat(this.quantity) * parseFloat(this.price)
            return res
          },
          price: 200
        },
        {
          offer_id: 3,
          offer: {
            en: '7 familly game',
            fr: 'Le jeu des 7 familles'
          },
          status: 'draft',
          quantity: 1,
          pas: 1,
          vat: 20,
          dimension: null,
          unit: 'h',
          currency: 'EUR',
          amount() {
            const res = parseFloat(this.quantity) * parseFloat(this.price)
            return res
          },
          price: 10
        }
      ]
    }
  },
  template: `<FvOrderLineList
    :orderLines="orderLines"
  >
  </FvOrderLineList>`
}))
