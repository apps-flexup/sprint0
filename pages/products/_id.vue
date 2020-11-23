<template lang="pug">
  fv-product-step-detail(
        :product="product"
        @product:changed="productChanged"
      )
</template>

<script>
export default {
  data() {
    return {
      product: {}
    }
  },
  mounted() {
    console.log('LE PRODUIT TA GRAND MERE', this.product)
  },
  methods: {
    productChanged(product) {
      this.product = product
    }
  }
}
</script>
