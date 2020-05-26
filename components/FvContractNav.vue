<template lang="pug">
  .fv-contract-nav
    p {{ $options.name }}
    v-row
        v-col(cols="4")
          v-btn(
            v-if="current > 1"
            @click="$emit('previousStep', current - 1)"
          ) Previous step
        v-col(cols="4")
          v-spacer
        v-col(cols="4")
          v-btn(
            v-if="current < nbSteps"
            @click="$emit('nextStep', current + 1)"
          ) Next step
          v-btn(
            v-else
            @click="$emit('submitSteps')"
          ) Submit steps
</template>

<script>
export default {
  name: 'FvContractNav',
  props: {
    current: {
      type: Number,
      default() {
        return 1
      }
    },
    nbSteps: {
      type: Number,
      default() {
        return 1
      }
    }
  },
  data() {
    return {
      next: 2,
      previous: 0
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-nav {
  background-color: inherit;
}
</style>
