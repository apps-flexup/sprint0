<template lang="pug">
.fv-offer-list
  fv-index-table(
    data-testid="table"
    :title="$t('table.offers.title')"
    :searchLabel="$t('table.offers.search')"
    tableComponent="fv-recursive-data-table"
    tableName="offers"
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
        unit: this.$displayRules.unit,
        price: this.$displayRules.priceWithUnit,
        vat: this.$displayRules.vat,
        visibility: this.$displayRules.visibility,
        status: this.$displayRules.status
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    offerSelected(offer) {
      this.$emit('list:selected', offer)
    }
  }
}
</script>
