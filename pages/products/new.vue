<template lang="pug">
  .page-product-new
    fv-form(
      :payload='product'
      @form:submit="createProduct"
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
    createProduct() {
      const payload = this.product
      this.$activeAccount.addProduct(payload)
    }
  }
}
</script>
