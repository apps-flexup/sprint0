<template lang="pug">
.fv-offer-data-table
    v-data-table.elevation-2(
      :headers='headers'
      :items='items'
      item-key='id'
      @click:row='selected'
      :search="search"
      :custom-filter="filterFunction"
    )
      template(v-slot:item.name='{ item }')
        div(v-to-locale="item.name")
      template(v-slot:item.price='{ item }')
        fv-price-to-preferred-currency(
          :price="item.price"
          :currency="item.currency"
        )
      template(v-slot:item.vat='{ item }')
        div {{ item.vat }}%
      template(v-slot:item.unit='{ item }')
        div(v-to-unit="item")
      template(v-slot:item.status='{ item }')
        fv-status-progress(:status="item.status")
      template(v-slot:item.actions="{ item }")
        v-row
          fv-edit-action(@edit:clicked="selected(item)")
          fv-delete-action(@delete:clicked="deleteItem(item)")
</template>

<script>
import { filterOffersDataTable, translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvOfferList',
  props: {
    search: {
      type: String,
      default() {
        return ''
      }
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersOffers()
      return translateHeaders(this.$i18n, res)
    },
    items() {
      const res = this.$activeAccount.offers()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOfferHeaders')
    this.$store.dispatch('offers/get')
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    selected(offer) {
      this.$emit('dataTable:selected', offer)
    },
    deleteItem(offer) {
      this.$store.dispatch('offers/remove', offer)
    },
    filterFunction(item, queryText, itemText) {
      return filterOffersDataTable(item, queryText, itemText)
    }
  }
}
</script>
