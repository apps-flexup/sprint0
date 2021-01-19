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
        category_id: this.$displayRules.category,
        unit: this.$displayRules.unit
      }
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersProducts()
      return translateHeaders(this.$i18n, res)
    }
  },
  asyncComputed: {
    async items() {
      const products = this.$activeAccount.products()
      const filters = [this.search]
      const sortKey = this.sortKey
      const shouldSortDesc = this.shouldSortDesc
      let res = await this.$dataTable.filter(products, filters, this.rules)
      if (sortKey) {
        const rule = this.rules[sortKey]
        res = await this.$dataTable.sortByRule(
          res,
          sortKey,
          shouldSortDesc,
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
