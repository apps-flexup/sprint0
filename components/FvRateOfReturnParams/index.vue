<template lang="pug">
.fv-rate-of-return-params
  fv-number-field(
    :label="$t('forms.paymentConditions.new.rateOfReturn')"
    @input="inputChanged"
  )
</template>

<script>
export default {
  name: 'FvRateOfReturnParams',
  mounted() {
    console.log('Composant', this.$options.name)
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
    }
  }
}
</script>
