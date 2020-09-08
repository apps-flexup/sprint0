<template lang="pug">
.fv-product-data-table
  v-data-table.elevation-2(
    :headers='headers'
    :items='items'
    item-key='id'
    @click:row='selected'
    :search="search"
    :custom-filter="filterFunction"
  )
    template(v-slot:item.category="{ item }")
      div(v-to-category="item.category_id")
    template(v-slot:item.unit='{ item }')
      div(v-to-unit="item")
    template(v-slot:item.status='{ item }')
      fv-status-progress(:status="item.status")
    template(v-slot:item.actions="{ item }")
      v-row
        fv-edit-action(@edit:clicked="selected(item)")
        fv-delete-action(@delete:clicked="deleteItem(item)")
</template>

<script>
import { filterProductsDataTable, translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvProductDataTable',
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
      const res = this.$activeAccount.headersProducts()
      return translateHeaders(this.$i18n, res)
    },
    items() {
      const res = this.$activeAccount.products()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getProductHeaders')
    this.$store.dispatch('products/get')
    this.$store.dispatch('categories/get')
  },
  methods: {
    selected(product) {
      console.log('selected: ', product)
      this.$emit('dataTable:selected', product)
    },
    deleteItem(product) {
      this.$store.dispatch('products/remove', product)
    },
    filterFunction(item, queryText, itemText) {
      return filterProductsDataTable(item, queryText, itemText)
    }
  }
}
</script>
