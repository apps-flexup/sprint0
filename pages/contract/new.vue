<template lang="pug">
  .contract-new
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
.contract-new {
  background-color: inherit;
}
</style>
