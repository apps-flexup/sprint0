<template lang="pug">
.fv-payment-term-params
  fv-number-field(
    :label="$t('forms.paymentConditions.new.days')"
    :value="value"
    @input="inputChanged"
  )
</template>

<script>
export default {
  name: 'FvPaymentTermParms',
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
      const value = this.computeValue(v)
      this.$emit('referenceParams:changed', v, value)
    },
    computeValue(v) {
      const nbDays = parseInt(v)
      let res = (Math.log10(nbDays + 60) + 0.5) / 5
      res *= 100
      return res
    },
  },
}
</script>
