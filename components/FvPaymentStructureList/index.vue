<template lang="pug">
.fv-payment-structure-list
  fv-index-table(
    data-testid="table"
    :title="$t('table.paymentStructures.title')"
    :searchLabel="$t('table.paymentStructures.search')"
    tableComponent="fv-payment-structure-data-table"
    tableName="paymentStructures"
    :rules="rules"
    @list:selected="paymentStructureSelected"
    @list:delete="deletePaymentStructure"
  )
</template>

<script>
export default {
  name: 'FvPaymentStructureList',
  data() {
    return {
      rules: {
        risk: this.$displayRules.paymentStructureRisk
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('paymentStructures/get')
  },
  methods: {
    paymentStructureSelected(paymentStructure) {
      this.$emit('list:selected', paymentStructure)
    },
    deletePaymentStructure(paymentStructure) {
      this.$store.dispatch('paymentStructures/remove', paymentStructure)
    }
  }
}
</script>
