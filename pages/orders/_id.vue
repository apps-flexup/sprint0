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
  }
}
</script>
<style scoped>
.order {
  background-color: inherit;
}
</style>
