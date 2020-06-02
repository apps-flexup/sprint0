<template lang="pug">
  .fv-partner-new
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
  name: 'FvPartnerNew',
  data() {
    return {
      step: 1
    }
  },
  computed: {
    steps() {
      const res = this.$store.getters['forms/partners']
      return res
    },
    etape() {
      const indice = parseInt(this.step)
      const res = this.steps.find((v) => parseInt(v.id) === indice)
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    moveTo(v) {
      console.log('Current step: ', v)
      this.step = v
    },
    submitSteps() {
      console.log('Submit steps')
    }
  }
}
</script>
