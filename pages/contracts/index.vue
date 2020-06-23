<template lang="pug">
  .contract-index
    fv-contract-list
    v-btn(color='primary' nuxt='' to='/contracts/new') Nouveau
</template>

<script>
export default {
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
