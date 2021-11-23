<template lang="pug">
.fv-status-select
  fv-flex-items
    template(v-slot:left)
      div.mr-5 {{ label }}
    template(v-slot:right)
      fv-status-select(
        :value="value"
        :availableStatus="availableStatus"
        @status:changed="changeStatus"
      )
</template>

<script>
export default {
  name: 'FvOfferStatusSelect',
  props: {
    value: {
      type: String,
      default: 'draft'
    },
    label: {
      type: String,
      default: null
    }
  },
  computed: {
    availableStatus() {
      return this.$store.getters['offers/availableStatus']
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

<style scoped>
::v-deep .mr-5 {
  color: black;
}
::v-deep .flex {
  justify-content: inherit;
}
</style>
