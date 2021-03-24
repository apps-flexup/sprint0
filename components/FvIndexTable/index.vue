<template lang="pug">
.fv-index-table
  v-card
    fv-data-table-header(
      data-testid='header'
      :title="title"
      :searchLabel="searchLabel"
      @dataTableSearch:filtersChanged="filtersChanged"
      @dataTableHeader:settingsClicked="settingsClicked"
    )
    component(
      :is="table"
      :headers="displayedHeaders"
      :items="formattedItems"
      @dataTable:selected="selected"
      @dataTable:sortBy="sortBy"
      @dataTable:delete="deleteItem"
    )
    fv-select-headers(
      :dialog="dialog"
      :headers="headers"
      @selectHeaders:close="close"
      @selectHeaders:save="save"
    )
</template>

<script>
import { translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvIndexTable',
  props: {
    title: {
      type: String,
      default() {
        return null
      }
    },
    searchLabel: {
      type: String,
      default() {
        return null
      }
    },
    table: {
      type: String,
      default() {
        return null
      }
    },
    headers: {
      type: [Array, Object],
      default() {
        return []
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    },
    rules: {
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      filters: [],
      sortKey: null,
      shouldSortDesc: false,
      dialog: false
    }
  },
  computed: {
    displayedHeaders() {
      const headers = this.headers
      let res = headers
      if (this.table === 'fv-recursive-data-table') {
        res = headers.main
      }
      res = res.filter((header) => header.active && header.enabled)
      return res
    },
    formattedItems() {
      const items = this.sortedItems
      let res = items
      if (this.table === 'fv-recursive-data-table') {
        const headers = this.headers
        if (!headers.sub) return []
        const subHeaders = headers.sub
        const subHeadersKeys = Object.keys(headers.sub)
        subHeadersKeys.forEach((key) => {
          subHeaders[key] = translateHeaders(this.$i18n, subHeaders[key])
        })
        res = [
          {
            headers: subHeaders,
            items
          }
        ]
      }
      return res
    }
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
        res = await this.$dataTable.sortByRule(
          res,
          sortKey,
          shouldSortDesc,
          rule
        )
      }
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getProductHeaders')
  },
  methods: {
    filtersChanged(v) {
      this.filters = v
    },
    selected(item) {
      this.$emit('list:selected', item)
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
      // Utiliser la prop tableName
      settings.headers.products = customHeaders
      this.$store.dispatch('settings/updateSettings', settings)
      this.dialog = false
    }
  }
}
</script>
