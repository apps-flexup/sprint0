<template lang="pug">
.fv-order-list
  v-card
    fv-data-table-header(
      :title="$t('table.orders.title')"
      :searchLabel="$t('table.orders.search')"
      @dataTableSearch:changed="searchChanged"
    )
    fv-order-data-table(
      :headers="headers"
      :items="items"
      @dataTable:selected="orderSelected"
      @dataTable:sortBy="sortBy"
    )
</template>

<script>
import { translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvOrderList',
  data() {
    return {
      search: '',
      sortKey: null,
      shouldSortDesc: false
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersOrders()
      return translateHeaders(this.$i18n, res)
    },
    items() {
      const orders = this.$activeAccount.orders()
      const filters = [this.search]
      let res = this.$dataTable.filter(orders, filters)
      if (this.sortKey) {
        res = this.$dataTable.sortByKey(res, this.sortKey, this.shouldSortDesc)
      }
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOrderHeaders')
    this.$store.dispatch('orders/get')
  },
  methods: {
    searchChanged(v) {
      this.search = v
    },
    orderSelected(order) {
      this.$emit('list:selected', order)
    },
    sortBy(v) {
      this.sortKey = v.key
      this.shouldSortDesc = v.desc
    }
  }
}
</script>
