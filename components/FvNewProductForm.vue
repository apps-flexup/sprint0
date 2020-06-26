<template lang="pug">
  .fv-new-product-form
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.name"
          :label="$t('forms.products.new.name')"
          outlined=''
        )
      v-col(cols='6')
        v-text-field(
          v-model="values.quantity"
          :label="$t('forms.products.new.quantity')"
          outlined=''
        )
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.price"
          :label="$t('forms.products.new.priceWithoutTax')"
          outlined=''
        )
      v-col(cols='6')
        v-text-field(
          v-model="values.unitStr"
          :label="$t('forms.products.new.priceUnit')"
          outlined=''
        )
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.statusStr"
          :label="$t('forms.products.new.status')"
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
