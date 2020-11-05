<template lang="pug">
  .page-product-new
    fv-step-form(
    ) 
      template(
        slot="form"
      )
        composant(
          :is="product"
        )
</template>

<script>
export default {
  data() {
    return {
      product: 'fv-product-form'
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    submit() {
      this.$nuxt.$loading.start()
      const payload = this.product
      this.$activeAccount.addProduct(payload)
      this.$nuxt.$loading.finish()
      this.$router.push('/products')
    },
    productChanged(product) {
      this.product = product
    }
  }
}
</script>
