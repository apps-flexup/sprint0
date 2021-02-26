<template lang="pug">
.fv-payment-structure-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='createPaymentStructure'
      ) {{ $t('buttons.create.paymentStructure') }}
  fv-payment-structure-list(@list:selected="selectedPaymentStructure")
</template>

<script>
export default {
  name: 'FvPaymentStructureIndex',
  methods: {
    selectedPaymentStructure(paymentStructure) {
      console.log('selected: ', paymentStructure)
      paymentStructure = JSON.parse(JSON.stringify(paymentStructure))
      this.$router.push('/paymentStructures/' + paymentStructure.id)
    },
    createPaymentStructure() {
      this.$router.push('/paymentStructures/new')
    }
  }
}
</script>
