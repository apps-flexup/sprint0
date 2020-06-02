<template lang="pug">
  fv-partner-step-detail
    v-row
      v-col(cols="6")
        span plop
      v-col(cols="6")
        span azeaze
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
      const res = [
        {
          id: 1,
          name: 'Consulting'
        },
        {
          id: 2,
          name: 'IT Development'
        },
        {
          id: 3,
          name: 'Funding'
        },
        {
          id: 4,
          name: 'Supply'
        },
        {
          id: 5,
          name: 'Work'
        },
        {
          id: 6,
          name: 'Royalties'
        },
        {
          id: 7,
          name: 'Rental'
        },
        {
          id: 9,
          name: 'Stage'
        },
        {
          id: 10,
          name: 'Annual IT subscriptions'
        }
      ]
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
