<template lang="pug">
.fv-contact-new
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
  name: 'FvContactNew',
  data() {
    return {
      step: 1,
    }
  },
  computed: {
    steps() {
      const res = this.$store.getters['forms/contacts']
      return res
    },
    etape() {
      if (this.steps.length < 1) return 1
      const indice = parseInt(this.step)
      const res = this.steps.find((v) => parseInt(v.id) === indice)
      return res
    },
  },
  mounted() {
    this.$store.dispatch('form/getContact')
  },
  methods: {
    moveTo(v) {
      this.step = v
    },
    submitSteps() {
      console.log('Submit steps')
    },
  },
}
</script>
