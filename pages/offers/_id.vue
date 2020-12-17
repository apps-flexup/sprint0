<template lang="pug">
  fv-form(
    :payload="getOffer"
    @offer:changed="offerChanged"
    @offers:add="editOffer"
    action='edit'
    url='offers'
    form='offers'
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
  computed: {
    getOffer() {
      const offerId = this.$route.params.id
      const offers = this.$store.getters['offers/findById'](offerId)
      const payload = JSON.parse(JSON.stringify(offers))
      return payload
    }
  },
  methods: {
    editOffer(offer) {
      const payload = offer
      payload.product_id = payload.productId
      this.$activeAccount.addOffer(payload)
    },
    offerChanged(offer) {
      this.offer = offer
    }
  }
}
</script>
