<template lang="pug">
  fv-form(
    :payload="getProduct"
    @payload:add="editProduct"
    action='edit'
    url='products'
    form='products'
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
  computed: {
    getProduct() {
      const productId = this.$route.params.id
      const products = this.$store.getters['products/findById'](productId)
      const payload = JSON.parse(JSON.stringify(products))
      return payload
    }
  },
  methods: {
    editProduct(product) {
      const payload = product
      this.$activeAccount.addProduct(payload)
    }
  }
}
</script>
