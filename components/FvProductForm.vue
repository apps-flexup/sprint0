<template lang="pug">
  .fv-product-form
    v-row
      v-col(cols='6')
        fv-category-autocomplete(
          :element="values.category_id"
          outlined=''
          @category:selected="categorySelected"
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
        fv-unit-autocomplete(
          element="values.unit"
          outlined=''
          @unit:selected="unitSelected"
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
      this.values.category_id = v
      this.$emit('category:autocomplete', v)
    },
    currencySelected(v) {
      console.log('currency :', v)
      this.values.currency = v
      this.$emit('currency:autocomplete', v)
    },
    unitSelected(v) {
      console.log('unit :', v)
      this.values.unit = v
      this.$emit('unit:autocomplete', v)
    }
  }
}
</script>
