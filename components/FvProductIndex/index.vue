<template lang="pug">
.fv-product-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='createProduct'
      ) {{ $t('buttons.create.product') }}
  fv-product-list(@list:selected="selectedProduct")
</template>

<script>
export default {
  name: 'FvProductIndex',
  data() {
    return {
      product: {},
      showModal: false
    }
  },
  methods: {
    close() {
      this.product = {}
      this.showModal = false
    },
    save() {
      this.$nuxt.$loading.start()
      this.showModal = false
      this.$activeAccount.addProduct(this.product)
      this.product = {}
      this.$nuxt.$loading.finish()
    },
    selectedProduct(product) {
      product = JSON.parse(JSON.stringify(product))
      this.$router.push('/products/' + product.id)
    },
    createProduct() {
      this.$router.push('/products/new')
    },
    productChanged(product) {
      this.product = product
    }
  }
}
</script>
