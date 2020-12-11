<template lang="pug">
.fv-product-list
  v-card
    fv-data-table-header(
      :title="$t('table.products.title')"
      :searchLabel="$t('table.products.search')"
      @dataTableSearch:changed="searchChanged"
    )
    fv-product-data-table(
      :headers="headers"
      :items="items"
      @dataTable:selected="selectedProduct"
    )
</template>

<script>
import { filterDataTable, translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvProductList',
  data() {
    return {
      search: ''
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersProducts()
      return translateHeaders(this.$i18n, res)
    },
    items() {
      const products = this.$activeAccount.products()
      const filters = [this.search]
      const res = filterDataTable(products, filters)
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
    searchChanged(v) {
      this.search = v
    },
    selectedProduct(product) {
      this.$emit('list:selected', product)
    }
  }
}
</script>
