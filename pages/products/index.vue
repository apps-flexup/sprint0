<template lang="pug">
  .products
    v-row(align="center")
      v-spacer
      fv-modal-and-button(
        :buttonText="$t('buttons.create.product')"
        :title="$t('forms.products.new.title')"
        component="fv-new-product-form"
        @close="close"
        @save="save"
      )
    fv-product-list
</template>

<script>
export default {
  methods: {
    close() {
      // Reset form ?
    },
    save(payload) {
      console.log('save modal with values: ', payload)
      this.$store.dispatch('products/add', payload)
    }
  }
}
</script>
<style lang="scss" scoped>
.products {
  background-color: inherit;
}
</style>
