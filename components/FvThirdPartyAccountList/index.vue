<template lang="pug">
.fv-third-party-account-list
  v-card
    fv-data-table-header(
      :title="$t('table.thirdPartyAccounts.title')"
      :searchLabel="$t('table.thirdPartyAccounts.search')"
      @dataTableSearch:changed="searchChanged"
    )
    fv-third-party-account-data-table(
      :search="search"
      @dataTable:selected="partnerSelected"
    )
</template>

<script>
export default {
  name: 'FvThirdPartyAccountList',
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
    partnerSelected(partner) {
      this.$emit('list:selected', partner)
    }
  }
}
</script>
