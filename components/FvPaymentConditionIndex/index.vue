<template lang="pug">
.fv-payment-contidion-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='createPaymentCondition'
      ) {{ $t('buttons.create.paymentCondition') }}
  fv-payment-condition-list(@list:selected="selectedPaymentCondition")
</template>

<script>
export default {
  name: 'FvPaimentConditionIndex',
  methods: {
    selectedPaymentCondition(paymentCondition) {
      console.log('selected: ', paymentCondition)
      // product = JSON.parse(JSON.stringify(product))
      // this.$router.push('/products/' + product.id)
    },
    createPaymentCondition() {
      this.$router.push('/paymentConditions/new')
    }
  }
}
</script>
