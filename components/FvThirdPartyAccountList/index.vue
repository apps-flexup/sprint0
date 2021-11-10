<template lang="pug">
.fv-third-party-account-list
  fv-index-table(
    data-testid="table"
    :title="$t('table.thirdPartyAccounts.title')"
    :searchLabel="$t('table.thirdPartyAccounts.search')"
    tableComponent="fv-third-party-account-data-table"
    tableName="thirdPartyAccounts"
    :rules="rules"
    @list:selected="thirdPartyAccountSelected"
  )
</template>

<script>
export default {
  name: 'FvThirdPartyAccountList',
  data() {
    return {
      rules: {
        type: this.$displayRules.accountType
      }
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
