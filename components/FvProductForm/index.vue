<template lang="pug">
  .fv-product-form
    v-list.mt-10(
      v-for="(step, index) in getProductStep"
      :key="index"
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
  computed: {
    getProductStep() {
      const res = this.$store.getters['forms/products']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('forms/getProduct')
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
::v-deep .v-list.mt-10.v-sheet.theme--light {
  background-color: rgb(241, 241, 241);
}
</style>
