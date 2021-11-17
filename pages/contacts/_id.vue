<template lang="pug">
  .contact-item
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
.contact-item {
  background-color: inherit;
}
</style>
