<template lang="pug">
.fv-product-list
  v-card
    fv-data-table-header(
      :title="$t('table.products.title')"
      :searchLabel="$t('table.products.search')"
      @dataTableSearch:changed="searchChanged"
    )
    fv-product-data-table(
      :search="search"
      @dataTable:selected="selectedProduct"
    )
</template>

<script>
export default {
  name: 'FvProductList',
  data() {
    return {
      search: ''
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
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
