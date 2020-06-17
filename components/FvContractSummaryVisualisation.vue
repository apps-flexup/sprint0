<template lang="pug">
  .fv-contract-summary-visualisation
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractSummaryVisualisation',
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
.fv-contract-summary-visualisation {
  background-color: inherit;
}
</style>
