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
          :partner="selectedPartner"
        )
    v-row
      v-col(cols="8")
        pre ajouter produit [{{ partnerId }}]
        fv-offer-autocomplete(
          v-if="partnerId"
          :partnerId="partnerId"
          @offers:selected="offerSelected"
        )
        //-   template(slot="append-outer")
        //-     v-btn(
              icon
              @click="newProduct"
            )
              v-icon mdi-plus
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
      selectedPartner: {}
    }
  },
  computed: {
    partnerId: {
      get() {
        const res = this.selectedPartner
        if (!res) return null
        if (!Object.prototype.hasOwnProperty.call(res, 'id')) return null
        return res.account_id
      }
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
    partnerSelected(partner) {
      this.selectedPartner = partner
    },
    offerSelected(offerId) {
      console.log('offer selected: ', offerId)
      // this.$repos.offers.show(productId).then((res) => {
      //   this.orderItems.push(res)
      // })
    }
  }
}
</script>
