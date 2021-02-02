<template lang="pug">
.fv-payment-condition-step-detail
  p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvPaymentConditionStepDetail',
  props: {
    payload: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
}
</style>
