<template lang="pug">
  .page-simulation
    p {{ $options.name }}
    ul
      li employés
      li charges
      li produits
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
.page-simulation {
  background-color: inherit;
}
</style>
