<template lang="pug">
  fv-product-form(
    :product="getProduct"
    @product:changed="productChanged"
    action='edit'
  )
</template>

<script>
export default {
  computed: {
    getProduct() {
      const productId = this.$route.params.id
      const products = this.$store.getters['products/findById'](productId)
      const payload = JSON.parse(JSON.stringify(products))
      return payload
    }
  },
  methods: {
    productChanged(product) {
      this.product = product
    }
  }
}
</script>
