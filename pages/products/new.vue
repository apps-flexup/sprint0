<template lang="pug">
  .page-product-new
    fv-product-form(
      :product='product'
      @product:changed="productChanged"
      url='products'
      form='products'
      action='new'
      @product:add="createProduct"
    )
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    productChanged(product) {
      this.product = product
    },
    createProduct(product) {
      const payload = product
      console.log('le produit la con de ta race', payload)
      this.$activeAccount.addProduct(payload)
    }
  }
}
</script>
