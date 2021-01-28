<template lang="pug">
.fv-order-list
  fv-index-table(
    :title="$t('table.orders.title')"
    :searchLabel="$t('table.orders.search')"
    table="fv-recursive-data-table"
    :headers="headers"
    :items="items"
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
  computed: {
    headers() {
      const res = this.$activeAccount.headersOrders()
      return res
    },
    items() {
      const res = this.$activeAccount.orders()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOrderHeaders')
    this.$store.dispatch('orders/get')
  },
  methods: {
    orderSelected(order) {
      this.$emit('list:selected', order)
    }
  }
}
</script>
