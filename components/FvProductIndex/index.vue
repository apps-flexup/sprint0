<template lang="pug">
.fv-product-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='createProduct'
      ) {{ $t('buttons.create.product') }}
  fv-product-list(@list:selected="selectedProduct")
</template>

<script>
export default {
  name: 'FvProductIndex',
  data() {
    return {
      product: {},
      showModal: false
    }
  },
  methods: {
    selectedProduct(product) {
      product = JSON.parse(JSON.stringify(product))
      console.log('le produit la con de ta race', product)
      this.$router.push('/products/' + product.id)
    },
    createProduct() {
      this.$router.push('/products/new')
    },
    productChanged(product) {
      this.product = product
    }
  }
}
</script>
