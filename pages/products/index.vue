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
    save(product) {
      this.$nuxt.$loading.start()
      this.showModal = false
      this.$activeAccount.addProduct(product)
      this.selected = {}
      this.$nuxt.$loading.finish()
    },
    selectedProduct(e) {
      console.log('produit selectionné', e)
      this.selected = JSON.parse(JSON.stringify(e))
      this.$repos.offers.show(this.selected.id).then((offer) => {
        console.log('Offer associated', offer)
        this.selected.unit = offer.unit
        this.selected.price = offer.price
        this.selected.currency = offer.currency
        this.selected.elasticity = offer.elasticity
        console.log('Selected: ', this.selected)
        this.showModal = true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.products {
  background-color: inherit;
}
</style>
