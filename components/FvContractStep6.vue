<template lang="pug">
  .fv-contract-step6
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractStep6',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step6 {
  background-color: inherit;
}
</style>
