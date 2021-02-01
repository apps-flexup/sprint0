<template lang="pug">
.fv-index-table
  v-card
    fv-data-table-header(
      data-testid='header'
      :title="title"
      :searchLabel="searchLabel"
      @dataTableSearch:filtersChanged="filtersChanged"
    )
    component(
      :is="table"
      :headers="translatedHeaders"
      :items="formattedItems"
      @dataTable:selected="selected"
      @dataTable:sortBy="sortBy"
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
      shouldSortDesc: false
    }
  },
  computed: {
    translatedHeaders() {
      const headers = this.headers
      let res = null
      if (this.table === 'fv-recursive-data-table') {
        res = translateHeaders(this.$i18n, headers.main)
      } else {
        res = translateHeaders(this.$i18n, headers)
      }
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
  },
  methods: {
    filtersChanged(v) {
      this.filters = v
    },
    selected(item) {
      this.$emit('list:selected', item)
    },
    sortBy(v) {
      this.sortKey = v.key
      this.shouldSortDesc = v.desc
    }
  }
}
</script>
