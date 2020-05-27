<template lang="pug">
  .fv-contract-summary-step3
    p {{ $options.name }}
    pre Affichage des Offre
</template>

<script>
export default {
  name: 'FvContractSummaryStep',
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
.fv-contract-summary-step3 {
  background-color: inherit;
}
</style>
