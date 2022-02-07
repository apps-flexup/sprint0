<template lang="pug">
.fv-data-table-header
  v-card-title(data-testid="title")
    fv-data-table-search-bar(
      data-testid="searchBar"
      :label="searchLabel"
      @dataTableSearchBar:changed="searchChanged"
      @dataTableSearchBar:filterValidated="filterValidated"
    )
    v-chip.chip(
      data-testid="filters"
      v-for="filter in filters" :key="filter"
      close
      :color="getColorForFilter(filter)"
      @click:close="removeFilter(filter)"
    ) {{ filter }}
    v-spacer
    fv-status-filter.status-filter(
      v-if="isStatusFilterAvailable"
      data-testid="statusFilters"
      :tableName="tableName"
      :filtersSelected="statusFiltersSelected"
      @statusFilter:filtersChanged="statusFiltersChanged"
    )
    fv-icon.settings(
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
      },
    },
    searchLabel: {
      type: String,
      default() {
        return 'Search'
      },
    },
    tableName: {
      type: String,
      default() {
        return null
      },
    },
    statusFiltersSelected: {
      type: Array,
      default() {
        return ['active', 'inactive']
      },
    },
  },
  data() {
    return {
      filters: [],
      colors: [],
    }
  },
  computed: {
    availableFilters() {
      const availableFilters = this.$store.getters[`${this.tableName}/availableFilters`] || []
      const res = availableFilters.map((availableFilter) => {
        return availableFilter.toLowerCase()
      })
      return res
    },
    isStatusFilterAvailable() {
      return this.availableFilters.includes('status')
    },
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
    statusFiltersChanged(filters) {
      this.$emit('dataTableSearch:statusFiltersChanged', filters)
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
    },
  },
}
</script>

<style scoped>
.chip {
  margin: 5px;
}
.settings {
  margin-left: 25px;
}
.status-filter {
  margin: 10px;
}
.filters {
  display: flex;
  align-items: center;
}
</style>
