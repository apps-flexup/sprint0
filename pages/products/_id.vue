<template lang="pug">
  fv-form(
    :payload="getProduct"
    @form:submit="editProduct"
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
    editProduct(payload) {
      this.$activeAccount.addProduct(payload)
    }
  }
}
</script>
