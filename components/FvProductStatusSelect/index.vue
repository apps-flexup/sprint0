<template lang="pug">
.fv-status-select
  fv-status-select(
    :value="value"
    :availableStatus="availableStatus"
    @status:changed="changeStatus"
  )
</template>

<script>
export default {
  name: 'FvProductStatusSelect',
  props: {
    value: {
      type: String,
      default: 'draft'
    }
  },
  computed: {
    availableStatus() {
      return this.$store.getters['products/availableStatus']
    }
  },
  methods: {
    changeStatus(newStatus) {
      this.$emit('payload:changed', newStatus)
      this.$emit('status:changed', newStatus)
    }
  }
}
</script>
