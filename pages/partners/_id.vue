<template lang="pug">
  .partner-item
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
.partner-item {
  background-color: inherit;
}
</style>
