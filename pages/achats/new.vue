<template lang="pug">
  .achat
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
.achat {
  background-color: inherit;
}
</style>
