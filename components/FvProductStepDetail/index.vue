<template lang="pug">
.fv-product-step-detail
  v-row
    v-col(cols='12')
      fv-category-autocomplete(
        data-testid='categoryAutocomplete'
        :category_id="category_id"
        @category:selected="categorySelected"
      )
  v-row
    v-col(cols='12')
      fv-text-field(
        data-testid='productName'
        :value="name"
        :label="$t('forms.products.new.name')"
        @input="nameChanged"
      )
  v-row
    v-col(cols='12')
      fv-unit-autocomplete(
        data-testid='unitAutocomplete'
        :dimension="dimension"
        :unit="unit"
        @unit:selected="unitSelected"
      )
</template>

<script>
export default {
  name: 'FvProductStepDetail',
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
      category_id: this.product.category_id || null,
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
      this.category_id = v
      const payload = {
        category_id: this.category_id
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
      this.category_id = this.product.category_id
      this.name = this.product.name
      this.unit = this.product.unit
      this.dimension = this.product.dimension
      this.localProduct = this.product
    },
    clearProduct() {
      this.category_id = null
      this.name = null
      this.unit = null
      this.dimension = null
      this.localProduct = {}
    }
  }
}
</script>

<style scoped>
.row {
  justify-content: center;
}
.information {
  display: flex;
  font-size: 18px;
}
.bold {
  font-weight: 500;
}
.headText {
  font-weight: 100;
}
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
}
</style>
