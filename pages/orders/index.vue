<template lang="pug">
  .orders
    fv-order-list
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style lang="scss" scoped>
.orders {
  background-color: inherit;
}
</style>
