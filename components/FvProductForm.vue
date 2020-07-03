<template lang="pug">
  .fv-product-form
    v-row
      v-col(cols='6')
        fv-category-autocomplete(
          v-model="values.category_id"
          :label="$t('forms.products.new.category')"
          outlined=''
          @category:autocomplete="categorySelected"
        )
      v-col(cols='6')
        v-text-field(
          v-model="values.periodicity"
          :label="$t('forms.products.new.periodicity')"
          outlined=''
        )
    v-row
      v-col(cols='6')
        v-text-field(
          v-model="values.name"
          :label="$t('forms.products.new.name')"
          outlined=''
        )
      v-col(cols='6')
        v-text-field(
          v-model="values.unit"
          :label="$t('forms.products.new.unit')"
          outlined=''
        )
    v-row
      v-col(cols="6")
        v-text-field(
          v-model="values.price"
          :label="$t('forms.products.new.price')"
          outlined=''
        )
      v-col(cols="6")
        fv-currency-autocomplete(
          v-model="values.currency"
          :label="$t('forms.products.new.currency')"
          outlined=''
          @currency:selected="currencySelected"
        )
    v-row
      v-col(cols="6")
        v-text-field(
          v-model="values.elasticity"
          :label="$t('forms.products.new.elasticity')"
          outlined=''
        )
</template>

<script>
export default {
  name: 'FvProductForm',
  props: {
    values: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    categorySelected(v) {
      console.log('category :', v)
      this.$emit('category:autocomplete', v)
    },
    currencySelected(v) {
      console.log('currency :', v)
      this.$emit('currency:autocomplete', v)
    }
  }
}
</script>
