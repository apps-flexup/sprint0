<template lang="pug">
  .page-product-new
    v-list.mt-10(
      v-for="(step, index) in product"
    )
      fv-step-form(
        :formId="index+1"
        :title="step.title"
      ) 
        template(
          slot="form"
        )
          composant(
            :is="step.component"
          )
</template>

<script>
export default {
  data() {
    return {
      product: [
        {
          component: 'fv-product-form',
          title: 'Information générales'
        },
        {
          component: 'fv-order-form',
          title: 'Commande à faire'
        }
      ]
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    submit() {
      this.$nuxt.$loading.start()
      const payload = this.product
      this.$activeAccount.addProduct(payload)
      this.$nuxt.$loading.finish()
      this.$router.push('/products')
    },
    productChanged(product) {
      this.product = product
    }
  }
}
</script>

<style scoped>
::v-deep .v-sheet {
  border-radius: 15px;
}
</style>
