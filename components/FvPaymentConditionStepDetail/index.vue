<template lang="pug">
.fv-payment-condition-step-detail
  p {{ $options.name }}
  pre {{ references }}
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
  computed: {
    references() {
      const res = this.$store.getters['references/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('references/get')
  }
}
</script>

<style scoped>
::v-deep .v-input.theme--light .v-input__slot {
  background: #ffffff;
}
</style>
