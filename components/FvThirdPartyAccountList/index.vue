<template lang="pug">
.fv-third-party-account-list
  fv-index-table(
    :title="$t('table.thirdPartyAccounts.title')"
    :searchLabel="$t('table.thirdPartyAccounts.search')"
    table="fv-third-party-account-data-table"
    :headers="headers"
    :items="items"
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
  computed: {
    headers() {
      const res = this.$activeAccount.headersThirdPartyAccounts()
      return res
    },
    items() {
      const res = this.$activeAccount.thirdPartyAccounts()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    thirdPartyAccountSelected(thirdParty) {
      this.$emit('list:selected', thirdParty)
    }
  }
}
</script>
