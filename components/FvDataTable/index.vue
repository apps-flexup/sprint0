<template lang="pug">
.fv-data-table
  v-data-table(
    data-testid="dataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    disable-sort
    @click:row='selected'
    :footer-props="{ \
      itemsPerPageText: $t('dataTable.footer.rowsPerPage'), \
      itemsPerPageAllText: $t('dataTable.footer.all') \
    }"
  )
    template(
      v-slot:footer.page-text="{ pageStart, pageStop }"
    )
      div {{ pageStart }} {{ $t('dataTable.footer.of') }} {{ pageStop }}
    template(
      v-slot:[getThSlot(key)]="{ header }"
      v-for="key in headers.map(header => header.value)"
    )
      fv-th(
        data-testid="fvTh"
        :text="header.text"
        :sortKey="header.value"
        :sortable="header.sortable"
        :isSorted="header.value === sortKey"
        :isSortedDesc="header.value === sortKey && sortDesc"
        @th:sort="thSort"
      )
    template(
      v-for="(index, name) in $scopedSlots" v-slot:[name]="data"
    )
      slot(
        :name="name"
        v-bind="data"
      )
</template>

<script>
export default {
  name: 'FvDataTable',
  props: {
    hideDefaultFooter: {
      type: Boolean,
      default() {
        return false
      }
    },
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
    }
  },
  data() {
    return {
      sortKey: null,
      sortDesc: false
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    getThSlot(key) {
      return 'header.' + key
    },
    thSort(v) {
      const key = v
      if (this.sortKey === key && this.sortDesc) {
        this.sortKey = null
        this.sortDesc = false
      } else if (this.sortKey === key) {
        this.sortDesc = true
      } else {
        this.sortKey = key
        this.sortDesc = false
      }
      const payload = {
        key: this.sortKey,
        desc: this.sortDesc
      }
      this.$emit('dataTable:sortBy', payload)
    },
    selected(item) {
      this.$emit('dataTable:selected', item)
    }
  }
}
</script>
