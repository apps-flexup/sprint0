<template lang="pug">
  .fv-product-form
    v-row
      v-col(cols='6')
        fv-category-autocomplete(
          :categoryId="categoryId"
          @category:selected="categorySelected"
        )
    v-row
      v-col(cols='6')
        fv-text-field(
          :label="$t('forms.products.new.name')"
          outlined=''
          @textField:changed="nameChanged"
        )
      v-col(cols='6')
        fv-unit-autocomplete(
          :dimension="dimension"
          :unit="unit"
          @unit:selected="unitSelected"
        )
</template>

<script>
export default {
  name: 'FvProductForm',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      localProduct: {},
      categoryId: this.product.category_id || null,
      name: null,
      unit: null,
      dimension: null
    }
  },
  watch: {
    product() {
      if (Object.entries(this.product).length === 0) {
        this.clearProduct()
      } else {
        this.fillFieldsWithProduct()
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.fillFieldsWithProduct()
  },
  methods: {
    categorySelected(v) {
      this.categoryId = v
      const payload = {
        categoryId: this.categoryId
      }
      const res = Object.assign(this.localProduct, payload)
      this.$emit('product:changed', res)
    },
    nameChanged(name) {
      console.log('Name changed: ', name)
      const payload = {
        name
      }
      const res = Object.assign(this.localProduct, payload)
      this.$emit('product:changed', res)
    },
    unitSelected(v) {
      const unit = this.$store.getters['units/find'](v)
      this.dimension = unit ? unit.dimension : null
      this.unit = unit ? unit.symbole : null
      const payload = {
        dimension: this.dimension,
        unit: this.unit
      }
      const res = Object.assign(this.localProduct, payload)
      this.$emit('product:changed', res)
    },
    fillFieldsWithProduct() {
      if (!this.product) return
      this.categoryId = this.product.category_id
      this.name = this.product.name
      this.unit = this.product.unit
      this.dimension = this.product.dimension
      this.localProduct = this.product
    },
    clearProduct() {
      this.categoryId = null
      this.name = null
      this.unit = null
      this.dimension = null
      this.localProduct = {}
    }
  }
}
</script>
