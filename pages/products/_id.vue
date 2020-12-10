<template lang="pug">
  fv-product-form(
    :product="getProduct"
    @product:changed="productChanged"
    action='edit'
    :url='category'
    :form='category'
  )
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default() {
        return 'products'
      }
    }
  },
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
