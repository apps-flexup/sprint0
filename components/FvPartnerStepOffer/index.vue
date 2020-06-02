<template lang="pug">
  .fv-partner-step-offer
    p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvPartnerStepOffer',
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
.fv-partner-step-offer {
  background-color: inherit;
}
</style>
