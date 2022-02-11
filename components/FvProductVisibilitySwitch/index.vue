<template lang="pug">
.fv-status-select
  fv-flex-items
    template(v-slot:left)
      div.mr-5 {{ `${label} ${$t('ponctuation.colons')}` }}
    template(v-slot:right)
      fv-visibility-switch(
        :value="value"
        @visibility:changed="clicked"
      )
</template>

<script>
export default {
  name: 'FvProductVisibilitySwitch',
  props: {
    value: {
      type: String,
      default: 'private',
    },
    label: {
      type: String,
      default: null,
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
::v-deep .mr-5 {
  color: black;
}
</style>
