<template lang="pug">
  fv-product-form(
    :offer="getOffer"
    @offer:changed="offerChanged"
    @offer:add="editOffer"
    action='edit'
    :url='category'
    :form='category'
  )
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default() {
        return 'offers'
      }
    },
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
      console.log('LA BELLE OFFFFFFRE', payload)
      return payload
    }
  },
  methods: {
    editOffer(offer) {
      const payload = offer
      this.$activeAccount.addOffer(payload)
    },
    offerChanged(offer) {
      this.offer = offer
    }
  }
}
</script>
