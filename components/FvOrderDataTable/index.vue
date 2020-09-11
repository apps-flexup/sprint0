<template lang="pug">
.fv-order-data-table
    v-data-table.elevation-2(
      :headers='headers'
      :items='items'
      item-key='id'
      @click:row='selected'
      :search="search"
      :custom-filter="filterFunction"
    )
      template(v-slot:item.date='{ item }')
        div {{ dateToLocaleString(item.date) }}
      template(v-slot:item.structure='{ item }')
        div {{ getStructureName(item.structure) }}
      template(v-slot:item.status ='{ item }')
        fv-status-progress(:status="item.status")
      template(v-slot:item.actions="{ item }")
        v-row
          fv-edit-action(@edit:clicked="selected(item)")
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
      const res = this.$activeAccount.headersOrders()
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
    selected(order) {
      this.$emit('dataTable:selected', order)
    },
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
