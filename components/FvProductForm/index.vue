<template lang="pug">
.fv-product-form
    v-row.head
      fv-icon.mr-11(
        color="inherit"
        size="xLarge"
        icon="mdi-chevron-left"
        @icon:clicked="cancel"
      )
      h1 {{ $t('forms.products.new.title') }}
    v-list.mt-10(
      v-for="(step, index) in getProductStep"
      :key="index"
    )
      fv-step-form(
        :formId="index+1"
        :title="step.title"
      )
        template(slot="form")
          composant(
            :is="step.component"
            :product="product"
            @product:changed="productChanged"
          )
    div.btn.mt-10
      fv-secondary-button(
        @button:click="cancel"
      ) {{ $t('forms.products.new.cancel') }}
      fv-primary-button(
        @button:click="submit"
      ) {{ $t('forms.products.new.validate') }}
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
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
    cancel() {
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
.btn {
  display: flex;
  justify-content: space-between;
}
.head {
  align-items: center;
}
</style>
