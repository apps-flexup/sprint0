<template lang="pug">
  .fv-contract-summary-step2
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractSummaryStepProduct',
  computed: {
    machin() {
      return 42
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-summary-step2 {
  background-color: inherit;
}
</style>
