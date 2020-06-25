<template lang="pug">
  .fv-new-product-form
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.name"
          label='Nom du produit'
          outlined=''
        )
      v-col(cols='6')
        v-text-field(
          v-model="values.quantity"
          label='Quantité'
          outlined=''
        )
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.priceWithoutTax"
          label='Prix excl taxe'
          outlined=''
        )
      v-col(cols='6')
        v-text-field(
          v-model="values.priceUnit"
          label='Unité de prix'
          outlined=''
        )
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.status"
          label='Status'
          outlined=''
        )
</template>

<script>
export default {
  name: 'FvNewProductForm',
  props: {
    values: {
      type: Object,
      default() {
        return {}
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
  }
}
</script>
<style lang="scss" scoped>
.fv-new-product-form {
  background-color: inherit;
}
</style>
