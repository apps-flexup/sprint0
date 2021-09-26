<template lang="pug">
.fv-product-archived-index
  fv-product-archived-list(
    data-testid="productArchivedList"
    @list:selected="selectedProduct"
  )
</template>

<script>
export default {
  name: 'FvProductArchivedIndex',
  computed: {
    canCreateProduct() {
      return this.$rights.canCreateProduct()
    }
  },
  methods: {
    selectedProduct(product) {
      const action = 'read'
      product = JSON.parse(JSON.stringify(product))
      this.$router.push(`/products/${action}/${product.id}`)
    }
  }
}
</script>
