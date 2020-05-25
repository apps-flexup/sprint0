<template lang="pug">
  .fv-contract-step4
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractStep4',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step4 {
  background-color: inherit;
}
</style>
