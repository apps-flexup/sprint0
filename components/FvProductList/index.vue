<template lang="pug">
.fv-product-list
  fv-index-table(
    data-testid="table"
    :title="findTitle"
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
  props: {
    archivedProductPage: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      rules: {
        status: this.$displayRules.status,
        category_id: this.$displayRules.category,
        unit: this.$displayRules.unit
      }
    }
  },
  computed: {
    findTitle() {
      const productTitle = this.$t('table.products.title')
      const archivedTitle = this.$t('table.products.archived.title')
      if (this.archivedProductPage) return archivedTitle
      return productTitle
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
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
