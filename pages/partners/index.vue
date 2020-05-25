<template lang="pug">
  .partner-index
    p {{ $options.name }}
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.partner-index {
  background-color: inherit;
}
</style>
