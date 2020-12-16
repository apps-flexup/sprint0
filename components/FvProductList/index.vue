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
      @dataTable:sortBy="sortBy"
      @dataTable:sortDesc="sortDesc"
    )
</template>

<script>
import { translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvProductList',
  data() {
    return {
      search: '',
      sortKey: null,
      shouldSortDesc: false
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
      let res = this.$dataTable.filter(products, filters)
      if (this.sortKey) {
        res = this.$dataTable.sortByKey(res, this.sortKey, this.shouldSortDesc)
      }
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getProductHeaders')
    this.$store.dispatch('categories/get')
    this.$store.dispatch('products/get')
  },
  methods: {
    searchChanged(v) {
      this.search = v
    },
    selectedProduct(product) {
      this.$emit('list:selected', product)
    },
    sortBy(v) {
      if (v[0])
        this.sortKey = v[0]
      else
        this.sortKey = null
    },
    sortDesc(v) {
      if (v[0])
        this.shouldSortDesc = v[0]
      else
        this.shouldSortDesc = false
    }
  }
}
</script>
