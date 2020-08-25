<template lang="pug">
.fv-contract-summary-step-commande
  p {{ $options.name }}
  pre Commande
</template>

<script>
export default {
  name: 'FvContractSummaryStepCommande',
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
<style scoped>
.fv-contract-summary-step5 {
  background-color: inherit;
}
</style>
