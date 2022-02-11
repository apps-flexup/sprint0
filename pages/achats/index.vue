<template lang="pug">
  .achats
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
.achats {
  background-color: inherit;
}
</style>
