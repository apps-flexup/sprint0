<template lang="pug">
  .fv-partner-step-detail
    p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvPartnerStepDetail',
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
.fv-partner-step-detail {
  background-color: inherit;
}
</style>
