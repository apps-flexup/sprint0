<template lang="pug">
  .contract-index
    p {{ $options.name }}
</template>

<script>
export default {
  computed: {
    machin() {
      return 42
    }
  },
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
