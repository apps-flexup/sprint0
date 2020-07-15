<template lang="pug">
  .fv-offer-list
    v-card
      v-card-title
        | {{ $t('table.offers.title') }}
        v-spacer
        v-text-field(
          v-model="search"
          :label="$t('table.offers.search')"
          append-outer-icon="mdi-magnify"
        )
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
        template(v-slot:item.unit='{ item }')
          div(v-to-unit="item")
        template(v-slot:item.status='{ item }')
          fv-status-progress-atom(:status="item.status")
        template(v-slot:item.actions='{ item }')
          v-icon.mr-2(small='' @click.stop='selected(item)')
            | mdi-pencil
          v-icon(small='' @click.stop='deleteItem(item)')
            | mdi-delete
</template>

<script>
import { filterOffersDataTable } from '~/plugins/utils'

export default {
  name: 'FvOfferList',
  data() {
    return {
      search: ''
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersOffers()
      return this.$translateHeaders(res)
    },
    items() {
      const res = this.$activeAccount.offers()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOfferHeaders')
  },
  methods: {
    selected(offer) {
      this.$emit('list:selected', offer)
    },
    deleteItem(offer) {
      this.$store.dispatch('offers/remove', offer)
    },
    filterFunction(item, queryText, itemText) {
      console.log('Item: ', item)
      return filterOffersDataTable(item, queryText, itemText)
    }
  }
}
</script>
