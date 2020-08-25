<template lang="pug">
  .contract-new
    fv-contract-new
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style scoped>
.contract-new {
  background-color: inherit;
}
</style>
