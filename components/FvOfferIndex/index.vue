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
      this.$router.push('/offers/' + offer.id)
    },
    createOffer() {
      this.$router.push('/offers/new')
    }
  }
}
</script>
