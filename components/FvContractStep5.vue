<template lang="pug">
  .fv-contract-step5
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractStep5',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step5 {
  background-color: inherit;
}
</style>
