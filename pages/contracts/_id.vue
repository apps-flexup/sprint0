<template lang="pug">
  .contract-item
    p {{ $options.name }}
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style scoped>
.contract-item {
  background-color: inherit;
}
</style>
