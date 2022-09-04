<template lang="pug">
.fv-unit-autocomplete-for-offer
  fv-unit-autocomplete(
    data-testid='unitAutocomplete'
    :value="unit"
    :dimensionFilter="dimensionFilter"
    @unit:selected="unitSelected"
  )
</template>

<script>
export default {
  name: 'FvUnitAutocompleteForOffer',
  props: {
    value: {
      type: Object,
      default() {
        return null
      }
    },
    search: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    product() {
      const productId = this.search ? this.search.product_id : null
      const product = this.$store.getters['products/findById'](productId)
      return product
    },
    unit() {
      let unit = this.value || null
      if (!unit) {
        unit = this.product ? this.product.unit : null
      }
      this.unitSelected(unit)
      return unit
    },
    dimensionFilter() {
      const res = this.unit ? this.unit.dimension : null
      return res
    }
  },
  mounted() {
    this.$store.dispatch('products/get')
  },
  methods: {
    unitSelected(v) {
      this.$emit('unit:selected', v)
      this.emitGenericSignalForForm(v)
    },
    emitGenericSignalForForm(payload) {
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
