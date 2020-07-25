<template lang="pug">
  .page-charges
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
<style scoped>
.page-charges {
  background-color: inherit;
}
</style>
