<template lang="pug">
.fv-status-readonly
  fv-status(
    :status="status"
  )
</template>

<script>
export default {
  name: 'FvStatusReadonly',
  props: {
    status: {
      type: String,
      default: 'draft'
    }
  }
}
</script>

<style scoped>
::v-deep .v-btn {
  cursor: not-allowed !important;
}
</style>
