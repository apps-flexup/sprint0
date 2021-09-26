<template lang="pug">
.fv-product-archived-list
  fv-index-table(
    data-testid="table"
    :title="title"
    :searchLabel="$t('table.products.search')"
    tableComponent="fv-product-archived-data-table"
    tableName="productsArchived"
    :rules="rules"
    @list:selected="productSelected"
  )
</template>

<script>
export default {
  name: 'FvProductArchivedList',
  data() {
    return {
      rules: {
        category_id: this.$displayRules.category,
        unit: this.$displayRules.unit
      }
    }
  },
  computed: {
    title() {
      const archivedTitle = this.$t('table.products.archived.title')
      return archivedTitle
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
