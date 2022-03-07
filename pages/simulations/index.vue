<template lang="pug">
  .page-simulation
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
.page-simulation {
  background-color: inherit;
}
</style>
