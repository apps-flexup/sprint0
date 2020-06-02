<template lang="pug">
  .partner-new
    fv-partner-new
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.partner-new {
  background-color: inherit;
}
</style>
