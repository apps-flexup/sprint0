<template lang="pug">
.fv-offer-list
  fv-index-table(
    :title="$t('table.offers.title')"
    :searchLabel="$t('table.offers.search')"
    table="fv-recursive-data-table"
    :headers="headers"
    :items="items"
    :rules="rules"
    @list:selected="offerSelected"
  )
</template>

<script>
export default {
  name: 'FvOfferList',
  data() {
    return {
      rules: {
        name: this.$displayRules.name,
        category_id: this.$displayRules.category,
        unit: this.$displayRules.unit,
        price: this.$displayRules.priceWithUnit,
        vat: this.$displayRules.vat,
        status: this.$displayRules.status
      }
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersOffers()
      return res
    },
    items() {
      const res = this.$activeAccount.offers()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOfferHeaders')
    this.$store.dispatch('offers/get')
  },
  methods: {
    offerSelected(offer) {
      this.$emit('list:selected', offer)
    }
  }
}
</script>
