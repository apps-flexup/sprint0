<template lang="pug">
.fv-product-list
  v-card
    fv-data-table-header(
      data-testid='header'
      :title="$t('table.products.title')"
      :searchLabel="$t('table.products.search')"
      @dataTableSearch:changed="searchChanged"
    )
    fv-product-data-table(
      data-testid='dataTable'
      :headers="headers"
      :items="items"
      @dataTable:selected="selectedProduct"
      @dataTable:sortBy="sortBy"
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
      shouldSortDesc: false,
      rules: {
        status: this.$displayRules.status,
        category_id: this.$displayRules.category
      }
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
      let res = this.$dataTable.filter(products, filters, this.rules)
      if (this.sortKey) {
        const rule = this.rules[this.sortKey]
        res = this.$dataTable.sortByKey(
          res,
          this.sortKey,
          this.shouldSortDesc,
          rule
        )
      }
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getProductHeaders')
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
      this.sortKey = v.key
      this.shouldSortDesc = v.desc
    }
  }
}
</script>
