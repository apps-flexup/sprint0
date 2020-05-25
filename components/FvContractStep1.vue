<template lang="pug">
  .fv-contract-step1
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractStep1',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step1 {
  background-color: inherit;
}
</style>
