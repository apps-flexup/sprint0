<template lang="pug">
.fv-order-data-table
  fv-data-table(
    data-testid="dataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
    @dataTable:selected="selected"
  )
    //template(v-slot:body.prepend)
    //  tr(class="totalLine")
    //    td.text-left {{ $t('total') }}
    //    td
    //    td.text-right(v-to-currency="{ amount: total, currency: preferredCurrency }")
    //    td(
    //      v-for="i in displayedHeaders.length - 3"
    //    )
    template(v-slot:item.label='{ item }')
      div {{ item.label }}
    template(v-slot:item.date='{ item }')
      div {{ localeDate(item) }}
    template(v-slot:item.value='{ item }')
      fv-price-to-preferred-currency(
        :price="item.value.amount"
        :currency="item.value.currency"
      )
    template(v-slot:item.status ='{ item }')
      fv-status-readonly(:status="item.status")
</template>

<script>
export default {
  name: 'FvOrderDataTable',
  props: {
    hideDefaultFooter: {
      type: Boolean,
      default() {
        return false
      },
    },
    headers: {
      type: Array,
      default() {
        return []
      },
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
    options: {
      type: Object,
      default() {
        return null
      },
    },
  },
  computed: {
    total() {
      let res = 0
      if (!this.items) return 0
      this.items.forEach((item) => {
        res += item.amount
      })
      return res
    },
    preferredCurrency() {
      const res = this.$store.getters['settings/settings']
      return res.currency
    },
  },
  methods: {
    localeDate(item) {
      const res = this.$displayRules.localeDate(item)
      return res
    },
    paymentStructure(item) {
      const res = this.$displayRules.paymentStructure(item)
      return res
    },
    selected(order) {
      this.$emit('dataTable:selected', order)
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    },
  },
}
</script>

<style scoped>
.totalLine {
  background-color: #fff8df;
}
</style>
