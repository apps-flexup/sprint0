<template lang="pug">
  .fv-partner-step-product
    p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvPartnerStepProduct',
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
.fv-partner-step-product {
  background-color: inherit;
}
</style>
