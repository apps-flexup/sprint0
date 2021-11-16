<template lang="pug">
.fv-payment-condition-index
  fv-header-index(
    data-testid="headerIndex"
    :title="$t('table.paymentConditions.title')"
    :titleButton="$t('buttons.create.paymentCondition')"
    @button:click="createPaymentCondition"
  )
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
