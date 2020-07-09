<template lang="pug">
  .fv-offer-step-resume
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvOrderStepResume',
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
.fv-offer-step-resume {
  background-color: inherit;
}
</style>
