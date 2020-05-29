<template lang="pug">
  .fv-contract-new
    v-row
      v-col(cols="12")
        fv-contract-nav(
          :current="step"
          :steps="steps"
          @moveTo="moveTo"
        )
    v-row
      v-col(cols="2")
        fv-contract-stepper(:steps="steps" :current="step")
      v-col(cols="10")
        component(:is="etape.composant" :etape='etape')
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      steps: [
        {
          id: 1,
          name: 'Détail',
          composant: 'fv-contract-step-detail',
          resume: 'fv-contract-summary-step-detail'
        },
        {
          id: 2,
          name: 'Produits',
          composant: 'fv-contract-step-product',
          resume: 'fv-contract-summary-step-product'
        },
        {
          id: 3,
          name: 'Offres',
          composant: 'fv-contract-step-offer',
          resume: 'fv-contract-summary-step-offer'
        },
        {
          id: 4,
          name: 'Structure',
          composant: 'fv-contract-step-structure',
          resume: 'fv-contract-summary-step-structure'
        },
        {
          id: 5,
          name: 'Commandes',
          composant: 'fv-contract-step-commande',
          resume: 'fv-contract-summary-step-commande'
        },
        {
          id: 6,
          name: 'Paiement',
          composant: 'fv-contract-step-paiement',
          resume: 'fv-contract-summary-paiement'
        }
      ]
    }
  },
  computed: {
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
