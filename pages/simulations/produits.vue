<template lang="pug">
  .page-produits
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
    },
  },
}
</script>
<style scoped>
.page-produits {
  background-color: inherit;
}
</style>
