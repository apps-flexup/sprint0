<template lang="pug">
.fv-payment-structure-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='createPaymentStructure'
      ) {{ $t('buttons.create.paymentStructure') }}
  //- fv-payment-condition-list(@list:selected="selectedPaymentCondition")
</template>

<script>
export default {
  name: 'FvPaymentStructureIndex',
  methods: {
    // selectedPaymentCondition(paymentCondition) {
    //   console.log('selected: ', paymentCondition)
    //   paymentCondition = JSON.parse(JSON.stringify(paymentCondition))
    //   this.$router.push('/paymentConditions/' + paymentCondition.id)
    // },
    createPaymentStructure() {
      this.$router.push('/paymentStructures/new')
    }
  }
}
</script>
