<template lang="pug">
.fv-unit-readonly
  fv-readonly-field(
    data-testid="autocomplete"
    :label="label"
    :value="unit"
  )
</template>

<script>
export default {
  name: 'FvUnitReadonly',
  props: {
    value: {
      type: Object,
      default() {
        return null
      },
    },
    label: {
      type: String,
      default() {
        return null
      },
    },
  },
  computed: {
    unit() {
      const valueDimension = this.value ? this.value.dimension : null
      const valueUnit = this.value ? this.value.unit : null
      const res = this.$store.getters['units/findByDimension'](valueDimension, valueUnit)
      const symbole = this.$t(`units.symbol.${res.symbole}`)
      const dimension = this.$t(`units.dimension.${res.dimension}`)
      return `${symbole} (${dimension})`
    },
  },
  mounted() {
    this.$store.dispatch('units/get')
  },
}
</script>
