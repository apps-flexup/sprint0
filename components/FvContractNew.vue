<template lang="pug">
  .fv-contract-new
    v-row
      v-col(cols="12")
        fv-nav(
          :current="step"
          :steps="steps"
          @moveTo="moveTo"
        )
    v-row
      v-col(cols="2")
        fv-stepper(:steps="steps" :current="step")
      v-col(cols="10")
        component(:is="etape.composant" :etape='etape')
</template>

<script>
export default {
  data() {
    return {
      step: 1
    }
  },
  computed: {
    steps() {
      const res = this.$store.getters['forms/contracts']
      return res
    },
    etape() {
      if (this.steps.length < 1) return 1
      const indice = parseInt(this.step)
      const res = this.steps.find((v) => parseInt(v.id) === indice)
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('forms/getContract')
    this.$store.dispatch('contracts/get')
  },
  methods: {
    moveTo(v) {
      console.log('Current step: ', v)
      this.step = v > 0 ? v : this.step
    },
    submitSteps() {
      console.log('Submit steps')
    },
    wizard(payload) {
      console.log('wizard :', payload)
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-new {
  background-color: inherit;
}
</style>
