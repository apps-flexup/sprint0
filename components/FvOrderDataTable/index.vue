<template lang="pug">
.fv-order-data-table
  fv-data-table(
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    @dataTable:sortBy="sortBy"
    @dataTable:selected="selected"
  )
    template(v-slot:item.date='{ item }')
      div {{ dateToLocaleString(item.date) }}
    template(v-slot:item.amount='{ item }')
      fv-price-to-preferred-currency.text-right(
        :price="item.amount"
        :currency="item.currency"
      )
    template(v-slot:item.structure='{ item }')
      div {{ getStructureName(item.structure) }}
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
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
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
      const locale = settings.language
      const dte = new Date(date)
      const res = dte.toLocaleDateString(locale)
      return res
    },
    getStructureName(structureId) {
      if (!structureId) {
        return null
      }
      const structure = this.$store.getters['contracts/getStructureById'](
        structureId
      )
      const res = structure.name
      return res
    }
  }
}
</script>
