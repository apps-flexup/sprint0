<template lang="pug">
  .page-product-new
    v-card(
      max-width="800px"
      justify-center
    )
      v-card-title {{ $t('products.new.title') }}
      v-card-text
        fv-product-form(:values="product")
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
      console.log('résultat :', this.product)
      this.$activeAccount.addProduct(this.product).then((_res) => {
        this.$nuxt.$loading.finish()
        this.router.push('/products')
      })
    }
  }
}
</script>
