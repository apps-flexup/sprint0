<template lang="pug">
  .fv-contract-stepper
    p {{ $options.name }}
    ul
      li(v-for="(step, index) in steps" :key="index")
        | {{ `${index}-${step}` }}
</template>

<script>
export default {
  name: 'FvContractStepper',
  computed: {
    steps() {
      const res = this.$store.getters['settings/etapes']
      return res
    }
  },
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
