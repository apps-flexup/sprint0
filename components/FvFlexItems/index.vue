<template lang="pug">
.fv-flex-items
  div.flex(
    data-testid="div"
  )
    slot(name='left')
    slot(name='separator')
    slot(name='right')
</template>

<script>
export default {
  name: 'FvFlexItems'
}
</script>

<style scoped>
.flex {
  display: flex !important;
  align-items: center;
  justify-content: center;
}
</style>
