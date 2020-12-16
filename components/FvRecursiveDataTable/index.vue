<template lang="pug">
.fv-recursive-data-table
  v-data-table.elevation-2(
    :headers="headers"
    :items="mainItems"
    class="plop"
  )
    template(
      v-slot:[getColumnSlot(key)]='{ item }'
      v-for="key in headers.map(header => header.value)"
    )
      component(
        :key="sortKey"
        :is="`fv-${key.replace(/s$/g,'')}-data-table`"
        :headers="item.headers ? item.headers[key] : []"
        :items="sortedItems"
        hide-default-footer
        @dataTable:sortBy="sortBy"
        @dataTable:sortDesc="sortDesc"
        class="plop"
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
    },
    sortedItems() {
      let res = this.mainItems[0].items
      res = this.$dataTable.filter(res, this.filters)
      if (this.sortKey) {
        res = this.$dataTable.sortByKey(res, this.sortKey, this.shouldSortDesc)
      }
      console.log('sortkey: ', this.sortKey)
      console.log('sorted array: ', res)
      return res
    }
  },
  watch: {
    headers: {
      deep: true,
      handler() {
        console.log('headers: ', this.headers)
      }
    },
    items: {
      deep: true,
      handler() {
        console.log('items: ', this.items)
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    sortBy(v) {
      console.log('old sort key: ', this.sortKey)
      if (v[0])
        this.sortKey = v[0]
      else
        this.sortKey = null
      console.log('new sort key: ', this.sortKey)
    },
    sortDesc(v) {
      if (v[0])
        this.shouldSortDesc = v[0]
      else
        this.shouldSortDesc = false
    },
    getColumnSlot(key) {
      return 'item.' + key
    }
  }

}
</script>

<style scoped>
::v-deep .v-data-table {
  border-radius: 0;
}
::v-deep .text-center {
  /* padding: 0px !important; */
}
::v-deep .fv-recursive-data-table > .v-data-table > .v-data-table__wrapper > table > tbody > tr > td:first-child {
  background-color: green;
  /* padding: inherit !important; */
}
.plop .v-data-table >>> .text-center {
  border-right: #E0E0E0 solid 1px;
}
::v-deep .text-center:last-child {
  border-right: 0
}
</style>
