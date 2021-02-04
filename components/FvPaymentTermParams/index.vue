<template lang="pug">
.fv-payment-term-params
  fv-number-field(
    :label="$t('forms.paymentConditions.new.days')"
    @input="inputChanged"
  )
</template>

<script>
export default {
  name: 'FvPaymentTermParms',
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    inputChanged(v) {
      this.$emit('referenceParams:changed', v)
    }
  }
}
</script>
