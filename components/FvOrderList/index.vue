<template lang="pug">
.fv-order-list
  v-card
    fv-data-table-header(
      :title="$t('table.orders.title')"
      :searchLabel="$t('table.orders.search')"
      @dataTableSearch:changed="searchChanged"
    )
    fv-recursive-data-table(
      :headers="mainHeaders"
      :items="mainItems"
      :filters="filters"
      :rules="rules"
      @dataTable:selected="orderSelected"
    )
</template>

<script>
import { translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvOrderList',
  data() {
    return {
      search: '',
      rules: {
        date: this.$displayRules.localeDate,
        amount: this.$displayRules.priceToPreferredCurrency,
        structure: this.$displayRules.paymentStructure,
        status: this.$displayRules.status
      }
    }
  },
  computed: {
    filters() {
      const res = []
      if (this.search) res.push(this.search)
      return res
    },
    mainHeaders() {
      const headers = this.$activeAccount.headersOrders()
      const res = translateHeaders(this.$i18n, headers.main)
      return res
    },
    mainItems() {
      const headers = this.$activeAccount.headersOrders()
      if (!headers.sub) return []
      const subHeaders = headers.sub
      const subHeadersKeys = Object.keys(subHeaders)
      subHeadersKeys.forEach((key) => {
        subHeaders[key] = translateHeaders(this.$i18n, subHeaders[key])
      })
      const res = [
        {
          headers: subHeaders,
          items: this.orderItems
        }
      ]
      return res
    },
    orderItems() {
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
    searchChanged(v) {
      this.search = v
    },
    orderSelected(order) {
      this.$emit('list:selected', order)
    }
  }
}
</script>
