<template functional lang="pug">
  v-card.fv-payment-summary-card(
    outlined
  )
    v-row
      v-col(cols="6")
        v-card-title {{ props.payment.payType }}
        v-card-subtitle.display-1 {{ props.payment.percentage }}%
      v-col(cols="6")
        v-card-title {{ props.payment.total * props.payment.percentage / 100 }} {{ props.payment.currency }}
        v-card-subtitle Sur {{ props.payment.total }} {{ props.payment.currency }}
    v-row
      v-col(cols="12" align='center')
        v-card-title.body-2 Date du paiement
        v-card-subtitle.title {{ props.payment.message }}
</template>
<style lang="scss" scoped>
.fv-payment-summary-card {
  border-radius: 25px;
  background-color: rgba(124, 155, 127, 0.822);
}
</style>
