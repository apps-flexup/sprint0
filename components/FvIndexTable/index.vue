<template lang="pug">
.fv-index-table
  fv-data-table-header(
    data-testid='header'
    :title="title"
    :searchLabel="searchLabel"
    :tableName="tableName"
    :statusFiltersSelected="statusFiltersSelected"
    @dataTableSearch:filtersChanged="filtersChanged"
    @dataTableSearch:statusFiltersChanged="statusFiltersChanged"
    @dataTableHeader:settingsClicked="settingsClicked"
  )
  component.table(
    data-testid="table"
    :is="tableComponent"
    :headers="formattedHeaders"
    :items="formattedItems"
    @dataTable:selected="selected"
    @dataTable:sortBy="sortBy"
    @dataTable:edit="editItem"
    @dataTable:delete="deleteItem"
  )
  fv-select-headers(
    data-testid="selectHeaders"
    :dialog="dialog"
    :headers="headers"
    :tableName="tableName"
    @selectHeaders:close="close"
    @selectHeaders:save="save"
  )
</template>

<script>
import { camelToSnakeCase } from '~/plugins/utils'

export default {
  name: 'FvIndexTable',
  props: {
    title: {
      type: String,
      default() {
        return null
      },
    },
    searchLabel: {
      type: String,
      default() {
        return null
      },
    },
    tableComponent: {
      type: String,
      default() {
        return null
      },
    },
    tableName: {
      type: String,
      default() {
        return null
      },
    },
    rules: {
      type: Object,
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
    defaultHeaders: {
      type: Array,
      default() {
        return null
      },
    },
    defaultItems: {
      type: Array,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      filters: [],
      statusFilters: null,
      sortKey: null,
      shouldSortDesc: false,
      dialog: false,
    }
  },
  computed: {
    headers() {
      if (this.defaultHeaders) {
        const customHeaders = this.$store.getters['settings/headers'](this.tableName)
        return customHeaders.length ? customHeaders : this.defaultHeaders
      }
      const snakeCaseTableName = camelToSnakeCase(this.tableName)
      const res = this.$activeAccount.headers(snakeCaseTableName)
      return res
    },
    items() {
      if (this.defaultItems) return this.defaultItems
      const res = this.$activeAccount.items(this.tableName, this.statusFilters)
      return res
    },
    formattedHeaders() {
      const headers = this.headers
      let res = headers
      if (!Array.isArray(res)) {
        res = headers.main
      }
      return res
    },
    formattedItems() {
      const items = this.sortedItems
      let res = items
      if (!Array.isArray(this.headers)) {
        const headers = this.headers
        if (!headers.sub) return []
        const subHeaders = headers.sub
        res = [
          {
            headers: subHeaders,
            items,
          },
        ]
      }
      return res
    },
  },
  asyncComputed: {
    async sortedItems() {
      const items = this.items
      const sortKey = this.sortKey
      const filters = this.filters
      const shouldSortDesc = this.shouldSortDesc
      let res = await this.$dataTable.filter(items, filters, this.rules)
      if (sortKey) {
        const rule = this.rules[sortKey]
        res = await this.$dataTable.sortByRule(res, sortKey, shouldSortDesc, rule)
      }
      return res
    },
  },
  methods: {
    filtersChanged(v) {
      this.filters = v
    },
    statusFiltersChanged(v) {
      this.statusFilters = v
    },
    selected(item) {
      this.$emit('list:selected', item)
    },
    editItem(item) {
      this.$emit('list:edit', item)
    },
    deleteItem(item) {
      this.$emit('list:delete', item)
    },
    sortBy(v) {
      this.sortKey = v.key
      this.shouldSortDesc = v.desc
    },
    settingsClicked() {
      this.dialog = true
    },
    close() {
      this.dialog = false
    },
    save(customHeaders) {
      const settings = this.$store.getters['settings/settings']
      if (!settings.headers) settings.headers = {}
      const snakeCaseTableName = camelToSnakeCase(this.tableName)
      settings.headers[snakeCaseTableName] = customHeaders
      this.$store.dispatch('settings/updateSettings', settings)
      this.dialog = false
    },
  },
}
</script>

<style scoped>
.fv-index-table > .table {
  border: #e1e2e6 1px solid;
  border-radius: 10px;
  box-shadow: inherit !important;
  overflow: hidden;
}
</style>
