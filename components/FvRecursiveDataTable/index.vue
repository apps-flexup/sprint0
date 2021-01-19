<template lang="pug">
.fv-recursive-data-table
  fv-data-table.elevation-2(
    data-testid="dataTable"
    :headers="headers"
    :items="mainItems"
    class="main-data-table"
  )
    template(
      v-slot:[getColumnSlot(key)]='{ item }'
      v-for="key in headers.map(header => header.value)"
    )
      component(
        :is="`fv-${key.replace(/s$/g,'')}-data-table`"
        :headers="item.headers ? item.headers[key] : []"
        :items="sortedItems"
        hide-default-footer
        @dataTable:sortBy="sortBy"
        @dataTable:selected="selected"
      )
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
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
    filters: {
      type: Array,
      default() {
        return []
      }
    },
    rules: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      sortKey: null,
      shouldSortDesc: false
    }
  },
  computed: {
    mainItems() {
      const res = this.items ? this.items : []
      return res
    }
  },
  asyncComputed: {
    async sortedItems() {
      let res = this.mainItems[0] ? this.mainItems[0].items : []
      const sortKey = this.sortKey
      const shouldSortDesc = this.shouldSortDesc
      res = await this.$dataTable.filter(res, this.filters, this.rules)
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
    sortBy(v) {
      this.sortKey = v.key
      this.shouldSortDesc = v.desc
    },
    getColumnSlot(key) {
      return 'item.' + key
    },
    selected(v) {
      this.$emit('dataTable:selected', v)
    }
  }
}
</script>

<style scoped>
::v-deep .v-data-table {
  border-radius: 0;
}
::v-deep
  .main-data-table
  > .v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr
  > td {
  border-right: #0e0e0e0e solid 1px;
  padding: 0;
}
::v-deep
  .main-data-table
  > .v-data-table
  > .v-data-table__wrapper
  > table
  > tbody
  > tr
  > td:last-child {
  border-right: 0;
}
::v-deep
  .main-data-table
  > .v-data-table
  > .v-data-table__wrapper
  > table
  > .v-data-table-header
  > tr
  > th {
  border-right: #0e0e0e0e solid 1px;
}
::v-deep
  .main-data-table
  > .v-data-table
  > .v-data-table__wrapper
  > table
  > .v-data-table-header
  > tr
  > th:last-child {
  border-right: 0;
}
</style>
