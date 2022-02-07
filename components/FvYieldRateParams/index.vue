<template lang="pug">
.fv-yield-rate-params
  fv-number-field(
    :label="$t('forms.paymentConditions.new.yieldRate')"
    :value="value"
    @input="inputChanged"
  )
</template>

<script>
export default {
  name: 'FvYieldRateParams',
  props: {
    value: {
      type: [Number, String],
      default() {
        return null
      },
    },
  },
  methods: {
    inputChanged(v) {
      if (v > 15) v = 15
      const value = this.computeValue(v)
      this.$emit('referenceParams:changed', v, value)
    },
    computeValue(v) {
      const rate = parseInt(v)
      const res = 100 - 6 * rate
      return res
    },
  },
}
</script>
