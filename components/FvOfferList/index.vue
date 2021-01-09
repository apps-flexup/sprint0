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
      @dataTable:selected="offerSelected"
    )
</template>

<script>
import { translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvOfferList',
  data() {
    return {
      search: ''
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
    }
  },
  asyncComputed: {
    async offerItems() {
      const res = await this.$activeAccount.offers()
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
