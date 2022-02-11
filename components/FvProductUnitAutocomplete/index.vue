<template lang="pug">
.fv-product-unit-autocomplete
  fv-unit-autocomplete(
    data-testid='unitAutocomplete'
    :value="unit"
    @unit:selected="unitSelected"
  )
</template>

<script>
export default {
  name: 'FvProductUnitAutocomplete',
  props: {
    value: {
      type: Object,
      default() {
        return null
      },
    },
    search: {
      type: Object,
      default() {
        return null
      },
    },
  },
  computed: {
    unit() {
      return this.value || null
    },
  },
  methods: {
    unitSelected(v) {
      this.$emit('unit:selected', v)
      this.emitGenericSignalForForm(v)
    },
    emitGenericSignalForForm(payload) {
      this.$emit('payload:changed', payload)
    },
  },
}
</script>
