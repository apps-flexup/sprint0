<template lang="pug">
.fv-product-unit-autocomplete
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
    dimensionFilter() {
      const productId = this.search ? this.search.id : null
      const offers = this.$store.getters['offers/getForProduct'](productId)
      const dimension = offers[0] ? offers[0].unit.dimension : null
      return dimension
    },
    unit() {
      const unit = this.value || null
      return unit
    }
  },
  mounted() {
    this.$store.dispatch('offers/get')
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
