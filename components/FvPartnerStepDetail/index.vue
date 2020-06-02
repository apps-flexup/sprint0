<template lang="pug">
  .fv-partner-step-detail
    v-row
      v-col(cols="6")
        span plop
      v-col(cols="6")
        span {{ formesJuridiques }}
    v-row
      v-col(cols="6")
        span azeaze
      v-col(cols="6")
        span azeaze
    v-row
      v-col(cols="6")
        span azeaze
      v-col(cols="6")
        span azeaze
</template>

<script>
export default {
  name: 'FvPartnerStepDetail',
  computed: {
    formesJuridiques() {
      const res = this.$store.getters['formesJuridiques']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
