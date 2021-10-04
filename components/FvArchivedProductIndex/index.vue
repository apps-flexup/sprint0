<template lang="pug">
.fv-archived-product-index
  fv-archived-product-list(
    data-testid="productArchivedList"
    @list:selected="selectedProduct"
  )
</template>

<script>
export default {
  name: 'FvArchivedProductIndex',
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
