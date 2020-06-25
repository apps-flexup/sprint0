<template lang="pug">
  .products
    v-row(align="center")
      v-spacer
      fv-modal-and-button(
        :buttonText="$t('buttons.create.product')"
        component="fv-new-product-form"
        @close="close"
        @save="save"
      )
    fv-product-list
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      title: this.$i18n.t('forms.products.new.title'),
      values: {
        name: null,
        quantity: null,
        price: null,
        unitStr: null,
        statusStr: null
      }
    }
  },
  computed: {
    machin() {
      return 42
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
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
