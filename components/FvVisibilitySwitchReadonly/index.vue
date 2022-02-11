<template lang="pug">
.fv-visibility-switch-readonly
  fv-visibility-switch(
    data-testid="switch"
    :label="label"
    :value="value"
    inset
    readonly
  )
</template>

<script>
export default {
  name: 'FvVisibilitySwitchReadonly',
  props: {
    value: {
      type: String,
      default() {
        return null
      },
    },
    label: {
      type: String,
      default() {
        return ''
      },
    },
  },
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
::v-deep .v-input__slot {
  background-color: inherit !important;
}
</style>
