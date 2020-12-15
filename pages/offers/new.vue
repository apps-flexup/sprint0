<template lang="pug">
  .page-product-new
    fv-product-form(
      :offer="offer"
      @offer:changed="offerChanged"
      @offer:add="createOffer"
      url='offers'
      form='offers'
      action='new'
    )
</template>

<script>
export default {
  props: {
    offer: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    offerChanged(offer) {
      this.offer = offer
    },
    createOffer(offer) {
      const payload = offer
      console.log('le produit la con de ta race', payload)
      this.$activeAccount.addOffer(payload)
    }
  }
}
</script>
