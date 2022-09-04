<template lang="pug">
  .fv-product-list
    fv-index-table(
      data-testid="table"
      :searchLabel="$t('table.products.search')"
      tableComponent="fv-product-data-table"
      tableName="products"
      :rules="rules"
      @list:selected="productSelected"
      @list:edit="editProduct"
    )
</template>

<script>
export default {
  name: 'FvProductList',
  data() {
    return {
      rules: {
        status: this.$displayRules.status,
        categoryId: this.$displayRules.category,
        unit: this.$displayRules.unit
      }
    }
  },
  mounted() {
    this.$store.dispatch('products/get')
  },
  methods: {
    productSelected(payload) {
      this.$emit('list:selected', payload)
    },
    editProduct(payload) {
      this.$emit('list:edit', payload)
    }
  }
}
</script>
