<template lang="pug">
.fv-product-list
  fv-index-table(
    data-testid="table"
    :title="title"
    :searchLabel="$t('table.products.search')"
    :tableComponent="tableComponent"
    :tableName="tableName"
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
    },
    tableName: {
      type: String,
      default() {
        return null
      }
    },
    tableComponent: {
      type: String,
      default() {
        return null
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
    title() {
      const productTitle = this.$t('table.products.title')
      const archivedTitle = this.$t('table.products.archived.title')
      if (this.archivedProductPage) return archivedTitle
      return productTitle
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
