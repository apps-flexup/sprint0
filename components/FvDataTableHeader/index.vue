<template lang="pug">
  .fv-data-table-header
    v-card-title
      | {{ title }}
      v-spacer
      fv-data-table-search-bar(
        :label="searchLabel"
        @dataTableSearchBar:changed="searchChanged"
      )
</template>

<script>
export default {
  name: 'FvDataTableHeader',
  props: {
    title: {
      type: String,
      default() {
        return 'Title'
      }
    },
    searchLabel: {
      type: String
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    searchChanged(v) {
      this.$emit('dataTableSearch:changed', v)
    }
  }
}
</script>
