<template lang="pug">
  .fv-contract-step6(v-if="etape.id === 6")
    v-card(outlined='' tile=''
     )
      v-list-item-title
        v-row
          v-col(cols='7') Base ( simple )
          v-col( cols='7')
            v-to-currency='montant'
        v-row
          v-col(cols='7') Base ( simple )
          v-col(="1" cols='7') 4564.54654 EUR
      v-list_item_subtitle.headline.mb-1
        v-row
          v-col(cols='7') 40%
          v-col(cols='7') sur 4564.54654 EUR
      v-card-actions
        v-row
          v-col(cols="12")
            p texte resultat
</template>

<script>
export default {
  name: 'FvContractStepPaiement',
  props: {
    etape: {
      type: Object,
      default() {
        return 6
      }
    }
  },
  data() {
    return {
      montant: 21.9,
      items: [],
      item: {},
      number: 21,
      float: 55.2,
      bool: true
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step6 {
  background-color: inherit;
}
</style>
