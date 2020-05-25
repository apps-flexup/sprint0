<template lang="pug">
  .fv-contract-stepper
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvContractStepper',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-stepper {
  background-color: inherit;
}
</style>
