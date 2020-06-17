<template lang="pug">
  .fv-contract-list
    p {{ $options.name }}
    fv-contract-list-search(
      :contracts="items"
    )
    v-row
      v-col(cols="12")
        v-data-table.elevation-2(
          :headers='headers'
          :items='items'
          item-key='id'
        )
</template>

<script>
export default {
  name: 'FvContractList',
  created() {
    this.$store.dispatch('contracts/getContracts')
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/contracts']
      return res
    },
    items() {
      const res = this.$store.state.contracts.items
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-list {
  background-color: inherit;
}
</style>
