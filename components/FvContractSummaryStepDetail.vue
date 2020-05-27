<template lang="pug">
  .fv-contract-summary-step1
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractSummaryStepDetail',
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
.fv-contract-summary-step1 {
  background-color: inherit;
}
</style>
