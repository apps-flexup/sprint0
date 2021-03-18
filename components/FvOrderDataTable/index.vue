<template lang="pug">
.fv-order-data-table
  fv-data-table(
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
    @dataTable:selected="selected"
  )
    template(v-slot:body.prepend)
      tr(class="totalLine")
        td.text-left {{ $t('total') }}
        td.text-right(v-to-currency="{ amount: total, currency: preferredCurrency }")
        td(
          v-for="i in headers.length - 2"
        )
    template(v-slot:item.date='{ item }')
      div {{ localeDate(item) }}
    template(v-slot:item.amount='{ item }')
      fv-price-to-preferred-currency(
        :price="item.amount"
        :currency="item.currency"
      )
    template(v-slot:item.structure='{ item }')
      div {{ paymentStructure(item) }}
    template(v-slot:item.status ='{ item }')
      fv-status-progress(:status="item.status")
    template(v-slot:item.actions="{ item }")
      v-row
        fv-edit-action(@edit:clicked="selected(item)")
</template>

<script>
export default {
  name: 'FvOrderDataTable',
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
    options: {
      type: Object,
      default() {
        return null
      }
    }
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
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
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
    dateToLocaleString(date) {
      if (!date) {
        return null
      }
      const settings = this.$store.getters['settings/settings']
      const locale = settings.locale
      const dte = new Date(date)
      const res = dte.toLocaleDateString(locale)
      return res
    }
  }
}
</script>

<style scoped>
.totalLine {
  background-color: #fff8df;
}
</style>
