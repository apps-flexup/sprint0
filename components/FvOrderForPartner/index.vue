<template lang="pug">
  .fv-order-for-partner
    p {{ $options.name }}
    v-row
      v-col(cols="6")
        fv-partner-autocomplete(
          v-model="partnerId"
          @partner:selected='partnerSelected'
        )
      v-col(cols="6")
        fv-partner-card(
          v-if="partnerId"
          :partnerId="partnerId"
        )
    v-row
      v-col(cols="8")
        fv-offer-autocomplete(
          :disabled="!partnerId"
          :partnerId="partnerId"
          @offers:selected="offerSelected"
        )
      v-col(cols="4")
        pre ajouter structure
        fv-structure-autocomplete(
          @structures:selected="structureSelected"
        )
    fv-order-line-list(
      :orderLines="orderLines"
      @orderLines:delete="deleteOrderLine"
    )
</template>

<script>
export default {
  name: 'FvOrderForPartner',
  data() {
    return {
      orderLines: [],
      partnerId: null
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    newPartner() {
      console.log('new partner')
    },
    newProduct() {
      console.log('new product')
    },
    structureSelected(structureId) {
      this.order.structure_id = structureId
    },
    partnerSelected(partnerId) {
      console.log('partner selected: ', partnerId)
      if (this.partnerId !== partnerId) {
        this.partnerId = partnerId
        this.orderLines = []
      }
    },
    offerSelected(offerId) {
      console.log('offer selected: ', offerId)
      if (!offerId) return
      this.$repos.offers.show(offerId).then((res) => {
        // TODO On ne push pas une ligne d'ordre, on doit traduire dans le format adequate
        const offer = JSON.parse(JSON.stringify(res))
        const payload = {
          offer_id: offer.id,
          offer: offer.name || 'absence de description',
          status: 'draft',
          quantity: 1,
          dimension: offer.dimension,
          unit: offer.unit,
          currency: offer.currency,
          amount() {
            const res = parseFloat(this.quantity) * parseFloat(this.price)
            return res
          },
          price: offer.price
        }
        this.orderLines.push(payload)
      })
    },
    deleteOrderLine(orderLine) {
      console.log('Delete order line here: ', orderLine)
      this.orderLines.filter((v) => v)
    }
  }
}
</script>
