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
  props: {
    contracts: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/contracts']
      return this.$translateHeaders(res)
    },
    items() {
      const res = this.$activeAccount.contracts()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getContractHeaders')
  }
}
</script>
