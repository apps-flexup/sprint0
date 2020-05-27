<template lang="pug">
  .fv-contract-step4(v-if="etape.id === 4")
    v-select(
      v-model="structContract"
      :items="structContractList"
      item-text="name"
      item-value="id"
      label="Type de structure"
      clearable=''
      outlined=''
    )
</template>

<script>
export default {
  name: 'FvContractStepOfferS',
  props: {
    etape: {
      type: Object,
      default() {
        return 4
      }
    }
  },
  data() {
    return {
      structContract: null
    }
  },
  computed: {
    structContractList() {
      const res = this.$store.getters['contracts/structures']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step4 {
  background-color: inherit;
}
</style>
