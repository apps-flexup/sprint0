<template lang="pug">
  .fv-contract-step3
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractStep3',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step3 {
  background-color: inherit;
}
</style>
