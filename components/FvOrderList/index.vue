<template lang="pug">
.fv-order-list
  fv-index-table(
    data-testid="indexTable"
    :searchLabel="$t('table.orders.search')"
    tableComponent="fv-recursive-data-table"
    tableName="orders"
    :rules="rules"
    @list:selected="orderSelected"
  )
</template>

<script>
export default {
  name: 'FvOrderList',
  data() {
    return {
      rules: {
        date: this.$displayRules.localeDate,
        amount: this.$displayRules.priceToPreferredCurrency,
        structure: this.$displayRules.paymentStructure,
        status: this.$displayRules.status
      }
    }
  },
  methods: {
    orderSelected(order) {
      this.$emit('list:selected', order)
    }
  }
}
</script>
