<template lang="pug">
  .achat
    p {{ $options.name }}
</template>

<script>
export default {
  computed: {
    machin() {
      return 42
    },
  },
}
</script>
<style scoped>
.achat {
  background-color: inherit;
}
</style>
