<template lang="pug">
.fv-visibility-switch
  v-switch(
    data-testid="switch"
    :input-value="inputValue"
    :label="`${$t(`visibility.${value}`)}`"
    :readonly="readonly"
    inset
    @change="clicked"
  )
</template>

<script>
export default {
  name: 'FvVisibilitySwitch',
  props: {
    value: {
      type: String,
      default() {
        return 'public'
      },
    },
    label: {
      type: String,
      default() {
        return ''
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
      return this.value === 'public'
    },
  },
  methods: {
    clicked() {
      let newVisibility
      if (this.value === 'public') newVisibility = 'private'
      else newVisibility = 'public'
      this.$emit('visibility:changed', newVisibility)
      this.$emit('payload:changed', newVisibility)
    },
  },
}
</script>

<style scoped>
::v-deep .v-input__slot {
  background-color: inherit !important;
}
::v-deep .v-input--selection-controls {
  margin: 0;
  padding: 0;
}
::v-deep .v-messages {
  display: none;
}
</style>
