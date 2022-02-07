<template lang="pug">
.fv-vat-field-readonly
  fv-vat-field(
    :value="value"
    :label="label"
    readonly
  )
</template>

<script>
export default {
  name: 'FvVatFieldReadonly',
  props: {
    value: {
      type: [String, Number],
      default() {
        return ''
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
::v-deep .v-input__slot {
  background-color: #e6e6e6 !important;
}
</style>
