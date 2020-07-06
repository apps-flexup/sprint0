<template lang="pug">
  .offers
    v-row(align="center")
      v-spacer
      fv-create-button(
        :text="$t('buttons.create.offer')"
        @button:click='showModal = true'
      )
      fv-product-modal(
        :show="showModal"
        :product='selected'
        @modal:close="close"
        @modal:save="save"
      )
    fv-offer-list(@list:selected="selectedOffer")
</template>

<script>
export default {
  data() {
    return {
      selected: {},
      showModal: false
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
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
    selectedOffer(offer) {
      this.selected = JSON.parse(JSON.stringify(offer))
      let product = {}
      this.$repos.products.show(offer.product_id).then((res) => {
        product = res
      })
      this.selected.category_id = product.category_id
      this.selected.periodicity = product.periodicity
      this.selected.currency = product.currency
      this.showModal = true
    }
  }
}
</script>
