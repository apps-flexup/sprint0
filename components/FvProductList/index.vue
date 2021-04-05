<template lang="pug">
.fv-product-list
  fv-index-table(
    data-testid="table"
    :title="$t('table.products.title')"
    :searchLabel="$t('table.products.search')"
    tableComponent="fv-product-data-table"
    tableName="products"
    :rules="rules"
    @list:selected="productSelected"
  )
</template>

<script>
export default {
  name: 'FvProductList',
  data() {
    return {
      rules: {
        status: this.$displayRules.status,
        category_id: this.$displayRules.category,
        unit: this.$displayRules.unit
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('products/get')
  },
  methods: {
    productSelected(product) {
      this.$emit('list:selected', product)
    }
  }
}
</script>
