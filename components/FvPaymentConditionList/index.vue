<template lang="pug">
.fv-payment-condition-list
  fv-index-table(
    data-testid="table"
    :searchLabel="$t('table.paymentConditions.search')"
    tableComponent="fv-payment-condition-data-table"
    tableName="paymentConditions"
    :rules="rules"
    @list:selected="paymentConditionSelected"
    @list:delete="deletePaymentCondition"
  )
</template>

<script>
export default {
  name: 'FvPaymentConditionList',
  data() {
    return {
      rules: {
        risk: this.$displayRules.paymentConditionRisk,
        references: {
          r1: this.$displayRules.paymentConditionPriority,
          r2: this.$displayRules.paymentConditionPaymentTerm,
          r3: this.$displayRules.paymentConditionInterestRate,
        },
      },
    }
  },
  mounted() {
    this.$store.dispatch('paymentConditions/get')
  },
  methods: {
    paymentConditionSelected(paymentCondition) {
      this.$emit('list:selected', paymentCondition)
    },
    deletePaymentCondition(paymentCondition) {
      this.$store.dispatch('paymentConditions/remove', paymentCondition)
    },
  },
}
</script>
