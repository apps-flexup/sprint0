<template lang="pug">
  .fv-order-form
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
          v-model='order.structure_id'
          @structures:selected="structureSelected"
        )
    v-row
      v-col(
        v-for="orderItem in orderItems" :key="orderItem.id"
        cols="12"
      )
        p {{ orderItem }}
    v-row
      v-col(cols="6")
        pre ici les totaux
        div total ht : mnt dev (utiliser directive)
        div total tva(s) : mnt dev (utiliser directive)
        div total ttc : mnt dev (utiliser directive)
        div total / seniorité : mnt dev (utiliser directive)
      v-col(cols="6")
        pre ici les trucs de la livraison
    v-row
      v-col(cols="6")
        pre envoyer devis par mail
      v-col(cols="6")
        pre generer pdf
</template>

<script>
export default {
  name: 'FvOrderForm',
  data() {
    return {
      order: {},
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
      // this.$repos.offers.show(offerId).then((res) => {
      //   this.orderItems.push(res)
      // })
    }
  }
}
</script>
