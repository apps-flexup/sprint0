<template lang="pug">
.fv-archived-product-list
  fv-index-table(
    data-testid="table"
    :title="$t('table.products.archived.title')"
    :searchLabel="$t('table.products.search')"
    tableComponent="fv-archived-product-data-table"
    tableName="productsArchived"
    :rules="rules"
    @list:selected="productSelected"
  )
</template>

<script>
export default {
  name: 'FvArchivedProductList',
  data() {
    return {
      rules: {
        category_id: this.$displayRules.category,
        unit: this.$displayRules.unit
      }
    }
  },
  mounted() {
    this.$store.dispatch('productsArchived/get')
  },
  methods: {
    productSelected(payload) {
      this.$emit('list:selected', payload)
    }
  }
}
</script>
