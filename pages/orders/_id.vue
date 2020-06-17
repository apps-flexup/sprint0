<template lang="pug">
  .order
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
.order {
  background-color: inherit;
}
</style>
