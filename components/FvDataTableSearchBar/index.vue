<template lang="pug">
.fv-data-table-search-bar
  fv-text-field.filterContainer(
    data-testid="textField"
    :value="search"
    :outlined="false"
    :placeholder="label"
    appendIcon="mdi-magnify"
    @input="inputChanged"
    @enterPressed="enterPressed"
  )
</template>

<script>
export default {
  name: 'FvDataTableSearchBar',
  props: {
    label: {
      type: String,
      default() {
        return 'Default label'
      }
    }
  },
  data() {
    return {
      search: null
    }
  },
  methods: {
    inputChanged(v) {
      this.search = v
      this.$emit('dataTableSearchBar:changed', v)
    },
    enterPressed() {
      this.$emit('dataTableSearchBar:filterValidated', this.search)
      this.search = null
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .v-text-field > .v-input__control > .v-input__slot:before {
  display: none;
}
::v-deep .v-input__slot {
  margin-bottom: 0;
}
::v-deep .v-text-field {
  padding-top: 0;
  margin-top: 0;
}
::v-deep .v-input input {
  font-size: 1rem;
}
.filterContainer {
  border: $datatable-header-border-style $datatable-header-border-color;
  border-radius: $datatable-header-border-radius;
  padding: $datatable-header-padding;
}
</style>
