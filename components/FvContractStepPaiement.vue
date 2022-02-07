<template lang="pug">
.fv-contract-step-payment
  v-row
    v-col(
      v-for="payment in payments" :key="payment.id"
      cols="6"
    )
      fv-payment-summary-card(:payment='payment')
</template>

<script>
export default {
  name: 'FvContractStepPaiement',
  data() {
    return {
      payments: [
        {
          id: 1,
          payType: 'Base',
          percentage: 40,
          total: 3600.0,
          currency: '€',
          message: '12/05/2024',
        },
        {
          id: 2,
          payType: 'Equity',
          percentage: 60,
          total: 3600.0,
          currency: '€',
          message: 'plop - barCentrale -',
        },
      ],
    }
  },
}
</script>
