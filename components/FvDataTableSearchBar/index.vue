<template lang="pug">
.fv-data-table-search-bar
  fv-text-field(
    data-testid="textField"
    :value="search"
    :label="label"
    :outlined="false"
    appendOuterIcon="mdi-magnify"
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
  mounted() {
    console.log('Composant', this.$options.name)
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
