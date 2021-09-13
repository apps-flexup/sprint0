<template lang="pug">
.fv-status-switch-readonly
  v-switch(
    data-testid="switch"
    class="ma-0 pa-0"
    :input-value="inputValue"
    :label="displayedLabel"
    :dense="dense"
    :hide-details="hideDetails"
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
    },
    hideDetails: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  computed: {
    inputValue() {
      return this.value === 'active'
    },
    displayedLabel() {
      let res = ''
      if (!this.denseLabel)
        res += `${this.label}${this.$t('ponctuation.colons')}`
      res += this.$t(`status.${this.value}`)
      return res
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
