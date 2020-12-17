<template lang="pug">
  .page-offer-new
    fv-form(
      :payload="offer"
      @offer:changed="offerChanged"
      @offers:add="createOffer"
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
      this.$activeAccount.addOffer(payload)
    }
  }
}
</script>
