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
    fv-order-item-list(
      :orderItems="orderItems"
    )
</template>

<script>
export default {
  name: 'FvOrderForPartner',
  data() {
    return {
      orderItems: [],
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
      this.partnerId = partnerId
    },
    offerSelected(offerId) {
      console.log('offer selected: ', offerId)
      if (!offerId) return
      this.$repos.offers.show(offerId).then((res) => {
        this.orderItems.push(res)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-order-for-partner {
  background-color: inherit;
}
</style>
