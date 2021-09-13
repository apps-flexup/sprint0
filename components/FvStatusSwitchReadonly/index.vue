<template lang="pug">
.fv-status-switch-readonly
  v-switch(
    data-testid="switch"
    class="ma-0 pa-0"
    :input-value="inputValue"
    :label="`${label}${$t('ponctuation.colons')}${$t(`status.${value}`)}`"
    hide-details
    inset
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
    }
  },
  computed: {
    inputValue() {
      return this.value === 'active'
    }
  }
}
</script>

<style scoped>
::v-deep .v-input__slot {
  background-color: inherit !important;
}
::v-deep .v-input--selection-controls__ripple {
  cursor: not-allowed !important;
}
::v-deep .v-label {
  cursor: default !important;
}
::v-deep input {
  cursor: default !important;
}
.v-input--switch {
  display: inline-block;
}
</style>
