<template lang="pug">
.fv-product-list
  fv-index-table(
    data-testid="table"
    :title="$t('table.products.title')"
    :searchLabel="$t('table.products.search')"
    table="fv-product-data-table"
    :headers="headers"
    :items="items"
    :rules="rules"
    @list:selected="productSelected"
  )
</template>

<script>
export default {
  name: 'FvProductList',
  data() {
    return {
      tableName: 'products',
      rules: {
        status: this.$displayRules.status,
        category_id: this.$displayRules.category,
        unit: this.$displayRules.unit
      }
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headers(this.tableName)
      return res
    },
    items() {
      const res = this.$activeAccount.products()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getProductHeaders')
    this.$store.dispatch('products/get')
  },
  methods: {
    productSelected(product) {
      this.$emit('list:selected', product)
    }
  }
}
</script>
