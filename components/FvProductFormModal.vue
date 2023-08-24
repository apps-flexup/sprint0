<template lang="pug">
  .fv-product-form-modal
    v-row(justify='center')
      v-dialog(v-model='dialog' persistent='' max-width='800px')
        template(v-slot:activator='{ on, attrs }')
          v-btn(color='primary' dark='' v-bind='attrs' v-on='on')
            | {{ $t('buttons.create.product') }}
        v-card
          fv-form(
            :payload='product'
            @form:submit="createProduct"
            @cancel:modal="dialog = false"
            :isModal='true'
            form='products'
            action='new'
          )
</template>

<script>
export default {
  name: 'FvProductFormModal',
  data() {
    return {
      dialog: false,
      product: {
        status: 'active'
      }
    }
  },
  methods: {
    createProduct(payload) {
      this.$emit('modal:submit', payload)
      this.dialog = false
    }
  }
}
</script>

<style scoped>
::v-deep .v-card {
  padding-bottom: 20px;
}
</style>
