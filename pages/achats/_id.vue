<template lang="pug">
  .order
    p {{ $options.name }}
    v-row
      v-col(cols="6")
        fv-payment-summary-card(
          payType='Base (simple)'
          :percentage.number="basePerc"
          :total.number="total"
          payDate='31 déc 2020'
        )
      v-col(cols="6")
        fv-payment-summary-card(
          payType='Equity (simple)'
          :percentage.number="equityPerc"
          :total.number="total"
        )
</template>

<script>
export default {
  name: 'FvContractStep6',
  data() {
    return {
      total: 3600,
      basePerc: 40,
      equityPerc: 60
    }
  }
}
</script>
<style scoped>
.order {
  background-color: inherit;
}
</style>
