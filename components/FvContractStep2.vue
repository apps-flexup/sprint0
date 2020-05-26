<template lang="pug">
  .fv-contract-step2
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
  name: 'FvContractStep2',
  data() {
    return {
      selected: []
    }
  },
  computed: {
    headers() {
      const res = this.$store.getters['headers/products']
      return res
    },
    items() {
      const res = this.$store.getters['products/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-contract-step2 {
  background-color: inherit;
}
</style>
