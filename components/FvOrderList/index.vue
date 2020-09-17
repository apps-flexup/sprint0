<template lang="pug">
.fv-order-list
  v-card
    fv-data-table-header(
      :title="$t('table.orders.title')"
      :searchLabel="$t('table.orders.search')"
      @dataTableSearch:changed="searchChanged"
    )
    fv-order-data-table(
      :search="search"
      @dataTable:selected="orderSelected"
    )
</template>

<script>
export default {
  name: 'FvOrderList',
  data() {
    return {
      search: ''
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    searchChanged(v) {
      this.search = v
    },
    orderSelected(order) {
      this.$emit('list:selected', order)
    }
  }
}
</script>
