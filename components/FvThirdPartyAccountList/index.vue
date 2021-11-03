<template lang="pug">
.fv-third-party-account-list
  fv-index-table(
    data-testid="table"
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
        legal_structure_id: this.$displayRules.legalStructure,
        country_id: this.$displayRules.country
      }
    }
  },
  methods: {
    thirdPartyAccountSelected(thirdParty) {
      this.$emit('list:selected', thirdParty)
    }
  }
}
</script>
