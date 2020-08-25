<template lang="pug">
.fv-contract-step-visualisation
  p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractStepVisualisation',
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
.fv-contract-step-visualisation {
  background-color: inherit;
}
</style>
