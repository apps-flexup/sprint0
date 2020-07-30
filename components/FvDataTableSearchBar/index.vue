<template lang="pug">
  .fv-data-table-search-bar
    fv-text-field(
      :value="value"
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
  data() {
    return {
      value: ''
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    inputChanged(v) {
      this.value = v
      this.$emit('dataTableSearchBar:changed', this.value)
    }
  }
}
</script>
