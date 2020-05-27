<template lang="pug">
  .fv-contract-summary-step5
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractSummaryStepStructure',
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
.fv-contract-summary-step5 {
  background-color: inherit;
}
</style>
