<template lang="pug">
.fv-offer-list
  v-card
    fv-data-table-header(
      data-testid='header'
      :title="$t('table.offers.title')"
      :searchLabel="$t('table.offers.search')"
      @dataTableSearch:changed="searchChanged"
    )
    fv-recursive-data-table(
      data-testid='recursiveDataTable'
      :headers="mainHeaders"
      :items="mainItems"
      :filters="filters"
      :rules="rules"
      @dataTable:selected="offerSelected"
    )
</template>

<script>
import { translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvOfferList',
  data() {
    return {
      search: '',
      rules: {
        name: this.$displayRules.name,
        category_id: this.$displayRules.category,
        unit: this.$displayRules.unit,
        price: this.$displayRules.priceWithUnit,
        vat: this.$displayRules.vat,
        status: this.$displayRules.status
      }
    }
  },
  computed: {
    filters() {
      const res = []
      if (this.search) res.push(this.search)
      return res
    },
    mainHeaders() {
      const headers = this.$activeAccount.headersOffers()
      const res = translateHeaders(this.$i18n, headers.main)
      return res
    },
    mainItems() {
      const headers = this.$activeAccount.headersOffers()
      if (!headers.sub) return []
      const subHeaders = headers.sub
      const subHeadersKeys = Object.keys(headers.sub)
      subHeadersKeys.forEach((key) => {
        subHeaders[key] = translateHeaders(this.$i18n, subHeaders[key])
      })
      const res = [
        {
          headers: subHeaders,
          items: this.offerItems
        }
      ]
      return res
    },
    offerItems() {
      const res = this.$activeAccount.offers()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getOfferHeaders')
    this.$store.dispatch('offers/get')
  },
  methods: {
    searchChanged(v) {
      this.search = v
    },
    offerSelected(offer) {
      this.$emit('list:selected', offer)
    }
  }
}
</script>
