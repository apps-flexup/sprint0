<template lang="pug">
.fv-product-index
  v-row
    v-col(cols="6")
      h1 {{ $t('table.products.title') }}
    v-col(cols="6")
      fv-primary-button.text-right(
        v-if="canCreateProduct"
        data-testid="createButton"
        @button:click='createProduct'
      ) {{ $t('buttons.create.product') }}
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

<style scoped>
.row {
  align-items: center;
}
</style>
