<template lang="pug">
  .page-product-new
    v-card(
      max-width="800px"
      justify-center
    )
      v-card-title {{ $t('products.new.title') }}
      v-card-text
        fv-product-form(
          :product="product"
          @product:changed="productChanged"
        )
      v-card-actions
        v-spacer
        v-btn(@click.stop="submit") {{ $t('buttons.submit') }}
</template>

<script>
export default {
  data() {
    return {
      product: {}
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
