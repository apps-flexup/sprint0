<template lang="pug">
  .fv-product-index
    v-row
      v-col(cols="12")
        fv-create-button.text-right(
          @button:click='showModal = true'
        ) {{ $t('buttons.create.product') }}
      fv-product-modal(
        :show="showModal"
        :product='product'
        @modal:close="close"
        @modal:save="save"
        @product:changed="productChanged"
      )
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
    selectedProduct(e) {
      this.product = JSON.parse(JSON.stringify(e))
      this.showModal = true
    },
    productChanged(product) {
      this.product = product
    }
  }
}
</script>
