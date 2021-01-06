<template lang="pug">
.fv-third-party-account-list
  v-card
    fv-data-table-header(
      :title="$t('table.thirdPartyAccounts.title')"
      :searchLabel="$t('table.thirdPartyAccounts.search')"
      @dataTableSearch:changed="searchChanged"
    )
    fv-third-party-account-data-table(
      :headers="headers"
      :items="items"
      @dataTable:selected="selectedThirdPartyAccount"
      @dataTable:sortBy="sortBy"
    )
</template>

<script>
import { translateHeaders } from '~/plugins/utils'

export default {
  name: 'FvThirdPartyAccountList',
  data() {
    return {
      search: '',
      sortKey: null,
      shouldSortDesc: false
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersThirdPartyAccounts()
      return translateHeaders(this.$i18n, res)
    },
    items() {
      const thirdPartyAccounts = this.$activeAccount.thirdPartyAccounts()
      const filters = [this.search]
      let res = this.$dataTable.filter(thirdPartyAccounts, filters)
      if (this.sortKey) {
        res = this.$dataTable.sortByKey(res, this.sortKey, this.shouldSortDesc)
      }
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    searchChanged(v) {
      this.search = v
    },
    selectedThirdPartyAccount(thirdParty) {
      this.$emit('list:selected', thirdParty)
    },
    sortBy(v) {
      this.sortKey = v.key
      this.shouldSortDesc = v.desc
    }
  }
}
</script>
