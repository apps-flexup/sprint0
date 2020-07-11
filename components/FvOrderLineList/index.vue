<template lang="pug">
  .fv-order-item-list
    p {{ $options.name }}
    v-row
      v-col(cols="12")
        v-data-table.elevation-2(
          :headers='headers'
          :items='orderLines'
          item-key='id'
        )
          template(v-slot:item.offer='{ item }')
            div(v-to-locale="item.name")
          template(v-slot:item.unit='{ item }')
            div(v-to-unit="item")
          template(v-slot:item.status='{ item }')
            fv-status-progress-atom(:status="item.status")
          template(v-slot:item.actions='{ item }')
            v-icon(small='' @click.stop='deleteOrderLine')
              | mdi-delete

</template>

<script>
export default {
  name: 'FvOrderLineList',
  props: {
    orderLines: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersOrders()
      return this.$translateHeaders(res)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOrderHeaders')
  },
  methods: {
    deleteOrderLine(v) {
      this.$emit('orderLines:delete', v)
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-order-item-list {
  background-color: inherit;
}
</style>
