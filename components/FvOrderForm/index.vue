<template lang="pug">
  .fv-offer-form
    v-row
      v-col(cols="6")
        fv-partner-autocomplete(
          :partner="order.partner_id"
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
        v-card.partner-address(v-if="partnerAddress.libAdd")
          v-card-title {{ $t('form.orders.new.defaults.address') }}
          v-card-text {{ partnerAddress.libAdd }}
    v-row
      v-col(cols="8")
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
        fv-structure-autocomplete(
          v-model='order.structure_id'
          @structures:selected="structureSelected"
        )
    v-row
      v-col(
        v-for="orderItem in orderItems" :key="orderItem.id"
        cols="12"
      )
        fv-product-item(:item="orderItem")
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
      partnerAddress: {}
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('contracts/getStructures')
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
      this.partnerAddress = {}
      // const res = this.$activeAccount.partners().filter((v) => v.id === partner_id)
      this.$repos.partners.show(partnerId).then((res) => {
        this.partnerAddress = {
          ...res,
          libAdd: `${res.address} ${res.city} ${res.country}`
        }
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
