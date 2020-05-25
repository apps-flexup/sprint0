<template lang="pug">
  .fv-contract-new
    p {{ $options.name }}
    v-row
      v-col(cols="2")
        fv-contract-stepper
      v-col(cols="10")
        fv-contract-step1(v-if="step === 1")
        fv-contract-step2(v-if="step === 2")
        fv-contract-step3(v-if="step === 3")
        fv-contract-step4(v-if="step === 4")
        fv-contract-step5(v-if="step === 5")
        fv-contract-step6(v-if="step === 6")
        fv-contract-nav
</template>

<script>
export default {
  data() {
    return {
      step: 1
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-new {
  background-color: inherit;
}
</style>
