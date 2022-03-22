<template lang="pug">
  .fv-product-form-modal
    v-row(justify='center')
      v-dialog(v-model='dialog' persistent='' max-width='900px')
        template(v-slot:activator='{ on, attrs }')
          v-btn(color='primary' dark='' v-bind='attrs' v-on='on')
            | Open Dialog
        fv-form(
          :payload='product'
          @form:submit="createProduct"
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
        status: 'active',
      },
    }
  },
  methods: {
    createProduct(payload) {
      this.$activeAccount.addProduct(payload)
    },
  },
}
</script>
