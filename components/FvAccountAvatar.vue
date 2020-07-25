<template functional lang="pug">
  .fv-account-avatar
    p {{ $options.name }} --===--
</template>

<script>
export default {
  name: 'FvAccountAvatar',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
.fv-account-avatar {
  background-color: inherit;
}
</style>
