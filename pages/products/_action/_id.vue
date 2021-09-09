<template lang="pug">
.product-id
  fv-form(
    :payload="getProduct"
    @form:submit="editProduct"
    :action="action"
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
    action() {
      const res = this.$route.params.action
      return res
    },
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
