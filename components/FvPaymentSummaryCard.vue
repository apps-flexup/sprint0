<template lang="pug">
  .fv-payment-summary-card
    v-card(
      outlined
    )
      v-row
        v-col(cols="8")
          v-card-title {{ payType }}
          v-card-subtitle.display-1 {{ percentage }}%
        v-spacer
        v-col(cols="3")
          v-card-title {{ total * percentage / 100 }}€
          v-card-subtitle Sur {{ total }}€
      v-row
        v-col(cols="12")
          v-card-title.body-2 Date du paiement
          v-card-subtitle.title(v-if="payDate !== ''") {{ payDate }}
          v-card-subtitle.title(v-else) Investi dans le projet
</template>

<script>
export default {
  name: 'FvPaymentSummaryCard',
  props: {
    payType: {
      type: String,
      default() {
        return 'Base (simple)'
      }
    },
    percentage: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    payDate: {
      type: String,
      default() {
        return ''
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style lang="scss" scoped>
.fv-payment-summary-card {
  background-color: inherit;
}
</style>
