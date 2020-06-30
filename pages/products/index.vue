<template lang="pug">
  .products
    v-row(align="center")
      v-spacer
      fv-create-button(
        :text="$t('buttons.create.product')"
        @button:click='showModal = true'
      )
      fv-product-modal(
        :show="showModal"
        :product='selected'
        @modal:close="close"
        @modal:save="save"
      )
    fv-product-list(@list:selected="selectedProduct")
</template>

<script>
export default {
  data() {
    return {
      selected: {},
      showModal: false
    }
  },
  methods: {
    close() {
      this.selected = {}
      this.showModal = false
    },
    save(e) {
      this.showModal = false
      this.$store.dispatch('products/add', e)
      this.selected = {}
    },
    selectedProduct(e) {
      console.log('produit selectionné', e)
      this.selected = JSON.parse(JSON.stringify(e))
      this.showModal = true
    }
  }
}
</script>
<style lang="scss" scoped>
.products {
  background-color: inherit;
}
</style>
