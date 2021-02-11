<template lang="pug">
.fv-payment-contidion-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='createPaymentCondition'
      ) {{ $t('buttons.create.paymentCondition') }}
  fv-payment-condition-list(@list:selected="selectedPaymentCondition")
</template>

<script>
export default {
  name: 'FvPaimentConditionIndex',
  methods: {
    selectedPaymentCondition(paymentCondition) {
      console.log('selected: ', paymentCondition)
      paymentCondition = JSON.parse(JSON.stringify(paymentCondition))
      this.$router.push('/paymentConditions/' + paymentCondition.id)
    },
    createPaymentCondition() {
      this.$router.push('/paymentConditions/new')
    }
  }
}
</script>
