<template lang="pug">
  .fv-contract-step5
    p {{ $options.name }}
    v-row
      v-col(cols="12")
        v-data-table.elevation-2(
          v-model="selected"
          :headers="headers"
          :items="items"
          item-key="id"
          show-select
        )
</template>

<script>
export default {
  name: 'FvContractStep5',
  data() {
    return {
      selected: []
    }
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/orders']
      return res
    },
    items() {
      const res = this.$store.getters['orders/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step5 {
  background-color: inherit;
}
</style>
