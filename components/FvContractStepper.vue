<template lang="pug">
  .fv-contract-stepper
    p {{ $options.name }}
    ul
      li(
        v-for="(etape, index) in steps"
        :class="index === step - 1 ? 'active' : ''"
        :key="index"
      ) {{ `${index}-${etape}` }}
</template>

<script>
export default {
  name: 'FvContractStepper',
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  computed: {
    steps() {
      const res = this.$store.getters['headers/etapes']
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
  .active {
    border-left: 5px solid green;
  }
}
</style>
