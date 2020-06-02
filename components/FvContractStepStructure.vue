<template lang="pug">
  .fv-contract-step4(v-if="etape.id === 4")
    v-row
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
  name: 'FvContractStep4',
  props: {
    etape: {
      type: Object,
      default() {
        return 3
      }
    }
  },
  data() {
    return {
      selected: [],
      structContract: undefined
    }
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/offers']
      return res
    },
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
.fv-contract-step3 {
  background-color: inherit;
}
</style>
