<template lang="pug">
.fv-data-table
  style.
    :root {
       --theadColor: {{ theadColor }}
    }
  v-data-table(
    data-testid="dataTable"
    :headers='headers'
    :items='items ? items : []'
    :hide-default-footer="hideDefaultFooter"
    disable-sort
    :footer-props="{ \
      itemsPerPageText: $t('dataTable.footer.rowsPerPage'), \
      itemsPerPageAllText: $t('dataTable.footer.all') \
    }"
    :server-items-length="itemsLength"
    :options="options"
    @click:row='selected'
    @pagination='paginationChanged'
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
        :class="headerClass(header.align)"
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
    },
    itemsLength: {
      type: Number,
      default() {
        return undefined
      }
    },
    options: {
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      sortKey: null,
      sortDesc: false
    }
  },
  computed: {
    theadColor() {
      const res = '#f5f6f7'
      return res
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
    },
    paginationChanged(pagination) {
      if (this.itemsLength) pagination.itemsLength = this.itemsLength
      this.$emit('dataTable:paginationChanged', pagination)
    },
    headerClass(alignment) {
      let flexAlignment = alignment
      if (flexAlignment === 'left') flexAlignment = 'start'
      if (flexAlignment === 'right') flexAlignment = 'end'
      const res = 'd-flex justify-' + flexAlignment
      return res
    }
  }
}
</script>

<style scoped>
::v-deep thead {
  background-color: var(--theadColor);
}
</style>
