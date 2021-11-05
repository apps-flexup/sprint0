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
  name: 'FvProductStatusSelect',
  props: {
    value: {
      type: String,
      default: 'draft'
    },
    label: {
      value: {
        type: String,
        default: null
      }
    }
  },
  computed: {
    availableStatus() {
      return this.$store.getters['products/availableStatus']
    }
  },
  methods: {
    changeStatus(newStatus) {
      if (this.value === 'active') {
        if (window.confirm(this.$t('table.products.warningMessage'))) {
          this.$emit('payload:changed', newStatus)
          this.$emit('status:changed', newStatus)
        }
      } else {
        this.$emit('payload:changed', newStatus)
        this.$emit('status:changed', newStatus)
      }
    }
  }
}
</script>

<style scoped>
::v-deep .mr-5 {
  color: black;
}
</style>
