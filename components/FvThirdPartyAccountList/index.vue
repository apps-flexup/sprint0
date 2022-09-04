<template lang="pug">
.fv-third-party-account-list
  fv-index-table(
    data-testid="table"
    :searchLabel="$t('table.thirdPartyAccounts.search')"
    tableComponent="fv-third-party-account-data-table"
    tableName="thirdPartyAccounts"
    :rules="rules"
    :statusFiltersSelected="defaultStatusFiltersSelected"
    @list:selected="thirdPartyAccountSelected"
  )
</template>

<script>
export default {
  name: 'FvThirdPartyAccountList',
  data() {
    return {
      rules: {
        type: this.$displayRules.accountType,
        status: this.$displayRules.status
      },
      defaultStatusFiltersSelected: ['active']
    }
  },
  mounted() {
    this.$store.dispatch('thirdPartyAccounts/get')
  },
  methods: {
    thirdPartyAccountSelected(thirdParty) {
      this.$emit('list:selected', thirdParty)
    }
  }
}
</script>
