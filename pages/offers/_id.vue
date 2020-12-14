<template lang="pug">
  fv-product-form(
    :offer="getOffer"
    @offer:changed="offerChanged"
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
    offerChanged(offer) {
      this.offer = offer
    }
  }
}
</script>
