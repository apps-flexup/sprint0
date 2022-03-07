<template lang="pug">
.fv-contract-step-structure(v-if="etape.id === 3")
  v-row
    v-select(
      v-model="selected"
      :items="structContractList"
      item-text="name"
      item-value="id"
      :label="$t('forms.contracts.structure.structureType')"
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
      },
    },
    values: {
      type: Object,
      default() {
        return {
          selected: [],
        }
      },
    },
  },
  data() {
    return {
      local_selected: [],
    }
  },
  computed: {
    selected: {
      get() {
        const res = this.local_selected || this.values.selected
        return res
      },
      set(v) {
        this.local_selected = v
        this.$emit('wizard', { structContract: v })
      },
    },
    structContractList() {
      const res = this.$store.getters['contracts/structures']
      return res
    },
  },
  mounted() {
    this.$store.dispatch('contracts/getStructures')
  },
}
</script>

<style scoped>
.fv-contract-step3 {
  background-color: inherit;
}
</style>
