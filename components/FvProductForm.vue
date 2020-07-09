<template lang="pug">
  .fv-product-form
    v-row
      v-col(cols='6')
        fv-category-autocomplete(
          :categoryId="values.category_id"
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
          :dimension="values.dimension"
          :unit="values.unit"
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
          :currency="values.currency"
          @currency:selected="currencySelected"
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
      this.values.category_id = v
      this.$emit('category:autocomplete', v)
    },
    currencySelected(v) {
      this.values.currency = v
      this.$emit('currency:autocomplete', v)
    },
    unitSelected(v) {
      const unit = this.$store.getters['units/find'](v)
      this.values.dimension = unit ? unit.dimension : null
      this.values.unit = unit ? unit.symbole : null
      const payload = {
        dimension: this.values.dimension,
        unit: this.values.unit
      }
      this.$emit('unit:autocomplete', payload)
    }
  }
}
</script>
