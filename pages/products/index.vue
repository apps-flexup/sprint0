<template lang="pug">
  .products
    v-row(align="center")
      v-spacer
      v-btn(
        x-large
        color="#FCB71C"
      ) Create product
    fv-product-list
</template>

<script>
export default {
  computed: {
    machin() {
      return 42
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.products {
  background-color: inherit;
}
</style>
