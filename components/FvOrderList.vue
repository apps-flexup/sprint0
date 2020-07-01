<template lang="pug">
  .fv-order-list
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
  name: 'FvOrderList',
  computed: {
    headers() {
      const res = this.$store.getters['headers/orders']
      return this.$translateHeaders(res)
    },
    items() {
      const res = this.$activeAccount.orders()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOrderHeaders')
  }
}
</script>

<style lang="scss" scoped>
.fv-order-list {
  background-color: inherit;
}
</style>
