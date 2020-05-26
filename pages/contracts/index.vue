<template lang="pug">
  .contract-index
    fv-contract-list
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.contract-index {
  background-color: inherit;
}
</style>
