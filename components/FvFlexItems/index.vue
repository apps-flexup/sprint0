<template lang="pug">
.fv-flex-items
  div.flex
    slot(name='left')
    slot(name='separator')
    slot(name='right')
</template>

<script>
export default {
  name: 'FvFlexItems',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
.flex {
  display: flex !important;
  align-items: center;
}
</style>
