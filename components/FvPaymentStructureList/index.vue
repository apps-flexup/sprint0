<template lang="pug">
.fv-payment-structure-list
  fv-index-table(
    data-testid="table"
    :title="$t('table.paymentStructures.title')"
    :searchLabel="$t('table.paymentStructures.search')"
    table="fv-payment-structure-data-table"
    :headers="headers"
    :items="items"
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
  computed: {
    headers() {
      const res = this.$activeAccount.headersPaymentStructures()
      console.log('headers: ', res)
      return res
    },
    items() {
      const res = this.$activeAccount.paymentStructures()
      console.log('paymentStructures: ', res)
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getPaymentStructureHeaders')
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
