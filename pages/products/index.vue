<template lang="pug">
  .products
    v-row(align="center")
      v-spacer
      fv-create-button(
        :text="$t('buttons.create.product')"
        @click="dialog = true"
      )
    fv-product-list
    fv-modal(
      :dialog="dialog"
      :title="title"
      component="fv-new-product-form"
      :values="values"
      @close="close"
      @save="save"
    )
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
        priceWithoutTax: null,
        priceUnit: null,
        status: null
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
      console.log('close modal')
      this.dialog = false
    },
    save(payload) {
      console.log('save modal with values: ', payload)
      this.dialog = false
    }
  }
}
</script>
<style lang="scss" scoped>
.products {
  background-color: inherit;
}
</style>
