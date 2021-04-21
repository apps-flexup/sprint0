<template lang="pug">
.fv-product-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        data-testid="createButton"
        @button:click='createProduct'
      ) {{ $t('buttons.create.product') }}
  fv-product-list(
    data-testid="productList"
    @list:selected="selectedProduct"
  )
</template>

<script>
export default {
  name: 'FvProductIndex',
  methods: {
    selectedProduct(product) {
      product = JSON.parse(JSON.stringify(product))
      this.$router.push('/products/' + product.id)
    },
    createProduct() {
      this.$router.push('/products/new')
    }
  }
}
</script>
