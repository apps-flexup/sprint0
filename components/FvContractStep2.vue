<template lang="pug">
  .fv-contract-step2
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractStep2',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step2 {
  background-color: inherit;
}
</style>
