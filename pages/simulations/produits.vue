<template lang="pug">
  .page-produits
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
.page-produits {
  background-color: inherit;
}
</style>
