<template lang="pug">
  .fv-user-info
    p {{ $auth.user }}
</template>

<script>
export default {
  name: 'FvUserInfo',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style scoped>
.fv-user-info {
  background-color: inherit;
}
</style>
