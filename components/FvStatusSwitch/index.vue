<template lang="pug">
.fv-status-switch
  v-switch(
    data-testid="switch"
    class="ma-0 pa-0"
    :input-value="inputValue"
    :label="displayedLabel"
    :dense="dense"
    :hide-details="hideDetails"
    :readonly="readonly"
    inset
    @change="clicked"
  )
</template>

<script>
export default {
  name: 'FvStatusSwitch',
  props: {
    value: {
      type: String,
      default() {
        return 'active'
      },
    },
    label: {
      type: String,
      default() {
        return ''
      },
    },
    dense: {
      type: Boolean,
      default() {
        return false
      },
    },
    denseLabel: {
      type: Boolean,
      default() {
        return false
      },
    },
    hideDetails: {
      type: Boolean,
      default() {
        return true
      },
    },
    readonly: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  computed: {
    inputValue() {
      return this.value === 'active'
    },
    displayedLabel() {
      let res = ''
      if (!this.denseLabel) res += `${this.label}${this.$t('ponctuation.colons')}`
      res += this.$t(`status.${this.value}`)
      return res
    },
  },
  methods: {
    clicked() {
      if (this.readonly) return
      let newVisibility
      if (this.value === 'active') newVisibility = 'inactive'
      else newVisibility = 'active'
      this.$emit('status:changed', newVisibility)
      this.$emit('payload:changed', newVisibility)
    },
  },
}
</script>

<style scoped>
::v-deep .v-input__slot {
  background-color: inherit !important;
}
.v-input--switch {
  display: inline-block;
}
</style>
