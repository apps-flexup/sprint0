<template lang="pug">
  .fv-offer-form
    p {{ $options.name }}
    v-row
      v-col(cols="6")
        fv-partner-autocomplete(
          v-model="order.partner_id"
          outlined=''
          clearable=''
          @partners:selected='partnerSelected'
        )
          template(v-slot:label='')
            p {{ $t('forms.orders.new.partner') }}
          template(v-slot:append-outer='')
            v-btn(
              icon
              @click="newPartner"
            )
              v-icon mdi-plus
      v-col(cols="6")
        .partner-address {{ this.partnerAddress }}
    v-row
      v-col(cols="8")
        pre ajouter produit
        fv-product-autocomplete(
          v-model="order.product_id"
          :label="$t('forms.orders.new.product')"
          outlined=''
          clearable=''
          @products:selected="productSelected"
        )
          template(slot="append-outer")
            v-btn(
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
  name: 'FvOfferForm',
  data() {
    return {
      order: {},
      orderItems: [],
      partnerAddress: {}
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
      this.order.partner_id = partnerId
      // const res = this.$activeAccount.partners().filter((v) => v.id === partner_id)
      this.$repos.partners.show(partnerId).then((res) => {
        this.partnerAddress = res
      })
    },
    productSelected(productId) {
      this.$repos.offers.show(productId).then((res) => {
        this.orderItems.push(res)
      })
    }
  }
}
</script>
