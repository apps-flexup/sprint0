<template lang="pug">
.fv-offer-index
  fv-header-index(
    data-testid="headerIndex"
    :title="$t('table.offers.title')"
    :titleButton="$t('buttons.create.offer')"
    :condition="canCreateOffer"
    @button:click="createOffer"
  )
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
