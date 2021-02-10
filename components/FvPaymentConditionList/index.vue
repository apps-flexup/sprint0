<template lang="pug">
.fv-payment-condition-list
  fv-index-table(
    data-testid="table"
    :title="$t('table.paymentConditions.title')"
    :searchLabel="$t('table.paymentConditions.search')"
    table="fv-payment-condition-data-table"
    :headers="headers"
    :items="items"
    :rules="rules"
    @list:selected="paymentConditionSelected"
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
          r3: this.$displayRules.paymentConditionInterestRate
        }
      }
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersPaymentConditions()
      console.log('headers: ', res)
      return res
    },
    items() {
      const res = this.$activeAccount.paymentConditions()
      console.log('paymentConditions: ', res)
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getPaymentConditionHeaders')
    this.$store.dispatch('paymentConditions/get')
  },
  methods: {
    paymentConditionSelected(paymentCondition) {
      this.$emit('list:selected', paymentCondition)
    }
  }
}
</script>
