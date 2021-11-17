<template lang="pug">
.fv-status-switch-readonly
  fv-status-switch(
    data-testid="switch"
    :value="value"
    :label="label"
    :dense="dense"
    :denseLabel="denseLabel"
    hide-details
    readonly
  )
</template>

<script>
export default {
  name: 'FvStatusSwitchReadonly',
  props: {
    value: {
      type: String,
      default() {
        return 'active'
      }
    },
    label: {
      type: String,
      default() {
        return ''
      }
    },
    dense: {
      type: Boolean,
      default() {
        return false
      }
    },
    denseLabel: {
      type: Boolean,
      default() {
        return false
      }
    }
  }
}
</script>

<style scoped>
::v-deep .v-input--selection-controls__ripple {
  cursor: not-allowed !important;
}
::v-deep .v-label {
  cursor: default !important;
}
::v-deep input {
  cursor: default !important;
}
</style>
