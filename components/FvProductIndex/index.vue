<template lang="pug">
.fv-product-index
  fv-header-index(
    data-testid="headerIndex"
    :title="$t('table.products.title')"
    :titleButton="$t('buttons.create.product')"
    @button:click="createProduct"
  )
  fv-product-list(
    data-testid="productList"
    @list:selected="selectedProduct"
    @list:edit="editProduct"
  )
</template>

<script>
export default {
  name: 'FvProductIndex',
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
    },
    editProduct(product) {
      const action = 'edit'
      product = JSON.parse(JSON.stringify(product))
      this.$router.push(`/products/${action}/${product.id}`)
    },
    createProduct() {
      this.$router.push('/products/new')
    }
  }
}
</script>
