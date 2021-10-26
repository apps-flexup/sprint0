<template lang="pug">
.fv-offer-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        v-if="canCreateOffer"
        data-testid="createOfferButton"
        @button:click='createOffer'
      ) {{ $t('buttons.create.offer') }}
  fv-offer-list(
    data-testid="offerList"
    @list:selected="selectedOffer"
    @list:edit="editOffer"
  )
</template>

<script>
export default {
  computed: {
    canCreateOffer() {
      return this.$rights.canCreateOffer()
    }
  },
  methods: {
    selectedOffer(offer) {
      offer = JSON.parse(JSON.stringify(offer))
      this.$router.push(`/offers/read/${offer.id}`)
    },
    editOffer(offer) {
      offer = JSON.parse(JSON.stringify(offer))
      this.$router.push(`/offers/edit/${offer.id}`)
    },
    createOffer() {
      this.$router.push('/offers/new')
    }
  }
}
</script>
