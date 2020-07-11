<template lang="pug">
  .fv-order-item-list
    p {{ $options.name }}
    v-row
      v-col(
        v-for="orderItem in orderItems" :key="orderItem.id"
        cols="12"
      )
        p {{ orderItem }}
</template>

<script>
export default {
  name: 'FvOrderItemList',
  props: {
    orderItems: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-order-item-list {
  background-color: inherit;
}
</style>
