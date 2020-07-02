<template lang="pug">
  .page-product-new
    p {{ $options.name }}
    h1 {{ $t('products.new.title') }}
    fv-product-form(:values="product")
    v-row
      v-col(cols="12")
        v-spacer
        v-btn(@click.stop="submitProduct") {{ $t('buttons.submit') }}
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
    submitProduct() {
      console.log('résultat :', this.product)
    }
  }
}
</script>
<style lang="scss" scoped>
.page-product-new {
  background-color: inherit;
}
</style>
