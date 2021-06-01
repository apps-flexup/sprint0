<template lang="pug">
.fv-data-table-header
  v-card-title(data-testid="title")
    | {{ title }}
    v-spacer
    v-chip.chip(
      data-testid="filters"
      v-for="filter in filters" :key="filter"
      close
      :color="getColorForFilter(filter)"
      @click:close="removeFilter(filter)"
    ) {{ filter }}
    fv-data-table-search-bar(
      data-testid="searchBar"
      :label="searchLabel"
      @dataTableSearchBar:changed="searchChanged"
      @dataTableSearchBar:filterValidated="filterValidated"
    )
    .settings(
      data-testid="settings"
      icon="mdi-cog"
      @icon:clicked="settingsClicked"
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
      type: String,
      default() {
        return 'Search'
      }
    }
  },
  data() {
    return {
      filters: [],
      colors: []
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    searchChanged(v) {
      const filters = this.filters.slice()
      filters.push(v)
      this.$emit('dataTableSearch:filtersChanged', filters)
    },
    filterValidated(filter) {
      const index = this.filters.indexOf(filter)
      if (index === -1) {
        this.filters.push(filter)
        const color = this.getRandomColor()
        this.colors.push(color)
        this.$emit('dataTableSearch:filtersChanged', this.filters)
      }
    },
    removeFilter(filter) {
      const index = this.filters.indexOf(filter)
      if (index !== -1) {
        this.filters.splice(index, 1)
        this.colors.splice(index, 1)
      }
      this.$emit('dataTableSearch:filtersChanged', this.filters)
    },
    getRandomColor() {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    getColorForFilter(filter) {
      const index = this.filters.indexOf(filter)
      let res = 'primary'
      if (index !== -1) {
        res = this.colors[index]
      }
      return res
    },
    settingsClicked() {
      this.$emit('dataTableHeader:settingsClicked')
    }
  }
}
</script>

<style scoped>
.chip {
  margin: 5px;
}
.settings {
  margin-left: 25px;
}
</style>
