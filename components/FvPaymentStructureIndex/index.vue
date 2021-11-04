<template lang="pug">
.fv-payment-structure-index
  fv-header-index(
    data-testid="headerIndex"
    :title="$t('table.paymentStructures.title')"
    :titleButton="$t('buttons.create.paymentStructure')"
    @button:click="createPaymentStructure"
  )
  fv-payment-structure-list(
    data-testid="paymentStructureList"
    @list:selected="selectedPaymentStructure"
  )
</template>

<script>
export default {
  name: 'FvPaymentStructureIndex',
  methods: {
    selectedPaymentStructure(paymentStructure) {
      this.$router.push('/paymentStructures/' + paymentStructure.id)
    },
    createPaymentStructure() {
      this.$router.push('/paymentStructures/new')
    }
  }
}
</script>

<style scoped>
.row {
  align-items: center;
}
</style>
