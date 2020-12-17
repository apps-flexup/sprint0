<template lang="pug">
  .page-product-new
    fv-form(
      :payload='product'
      @product:changed="productChanged"
      @products:add="createProduct"
      url='products'
      form='products'
      action='new'
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
      this.$activeAccount.addProduct(payload)
    }
  }
}
</script>
