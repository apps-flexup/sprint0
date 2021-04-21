<template lang="pug">
.fv-payment-structure-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        data-testid="createButton"
        @button:click='createPaymentStructure'
      ) {{ $t('buttons.create.paymentStructure') }}
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
