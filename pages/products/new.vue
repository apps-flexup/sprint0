<template lang="pug">
  .page-product-new
    fv-product-form(
      :product='product'
      @product:changed="productChanged"
      url='products'
      form='products'
      action='new'
      @product:add="addProduct"
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
    addProduct(product) {
      const payload = product
      this.$activeAccount.addProduct(payload)
    },
    productChanged(product) {
      this.product = product
    }
  }
}
</script>
