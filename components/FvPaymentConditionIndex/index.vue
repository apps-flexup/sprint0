<template lang="pug">
.fv-payment-condition-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        data-testid="createButton"
        @button:click='createPaymentCondition'
      ) {{ $t('buttons.create.paymentCondition') }}
  fv-payment-condition-list(
    data-testid="paymentConditionList"
    @list:selected="selectedPaymentCondition"
  )
</template>

<script>
export default {
  name: 'FvPaimentConditionIndex',
  methods: {
    selectedPaymentCondition(paymentCondition) {
      this.$router.push('/paymentConditions/' + paymentCondition.id)
    },
    createPaymentCondition() {
      this.$router.push('/paymentConditions/new')
    }
  }
}
</script>
