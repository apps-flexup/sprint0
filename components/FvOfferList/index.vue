<template lang="pug">
.fv-offer-list
  fv-index-table(
    data-testid="table"
    :searchLabel="$t('table.offers.search')"
    tableComponent="fv-recursive-data-table"
    tableName="offers"
    :rules="rules"
    @list:selected="offerSelected"
    @list:edit="editOffer"
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
  methods: {
    offerSelected(offer) {
      this.$emit('list:selected', offer)
    },
    editOffer(payload) {
      this.$emit('list:edit', payload)
    }
  }
}
</script>
