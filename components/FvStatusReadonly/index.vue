<template lang="pug">
.fv-status-readonly
  fv-status(
    :status="value"
  )
</template>

<script>
export default {
  name: 'FvStatusProgress',
  props: {
    value: {
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
