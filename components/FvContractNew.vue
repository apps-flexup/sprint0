<template lang="pug">
.fv-contract-new
  v-row
    v-col(cols="12") ({{ values }})
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
      keep-alive
        component(
          :is="etape.composant"
          :etape='etape'
          :values='values'
          @wizard="wizard"
        )
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      values: {
        contact: null,
        charter: null,
        contractType: null,
        dteSignature: null,
        dteEffect: null,
        dteEnd: null,
        offers: [],
        structContract: null
      }
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
    // this.$store.dispatch('contracts/get')
  },
  methods: {
    moveTo(v) {
      this.step = v > 0 ? v : this.step
    },
    submitSteps() {
      console.log('Submit steps')
    },
    wizard(payload) {
      const values = this.values
      const res = Object.assign(values, payload)
      this.values = res
    }
  }
}
</script>
<style scoped>
.fv-contract-new {
  background-color: inherit;
}
</style>
