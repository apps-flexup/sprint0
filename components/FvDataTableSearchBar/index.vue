<template lang="pug">
  .fv-data-table-search-bar
    fv-text-field(
      :label="label"
      :outlined="false"
      appendOuterIcon="mdi-magnify"
      @input="inputChanged"
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
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    inputChanged(v) {
      this.$emit('dataTableSearchBar:changed', v)
    }
  }
}
</script>
