<template lang="pug">
.fv-order-data-table
  v-data-table.elevation-2(
    :headers='headers'
    :items='items'
    item-key='id'
    :search="search"
    :custom-filter="filterFunction"
  )
    template(v-slot:item.date='{ item }')
      div {{ dateToLocaleString(item.date) }}
    template(v-slot:item.structure='{ item }')
      div {{ getStructureName(item.structure) }}
</template>

<script>
import { filterOrdersDataTable, translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvOrderDataTable',
  props: {
    search: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/orders']
      return translateHeaders(this.$i18n, res)
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
    filterFunction(item, queryText, itemText) {
      return filterOrdersDataTable(item, queryText, itemText)
    },
    dateToLocaleString(date) {
      if (!date) {
        return null
      }
      const dte = new Date(date)
      const res = dte.toLocaleString().slice(0, 10)
      return res
    },
    getStructureName(structureId) {
      if (!structureId) {
        return null
      }
      const structure = this.$store.getters['contracts/getStructureById'](
        structureId
      )
      const res = structure.name
      return res
    }
  }
}
</script>
