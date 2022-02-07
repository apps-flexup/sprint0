<template lang="pug">
.fv-third-party-account-card
  v-card(v-if="thirdPartyAccount")
    v-list-item
      v-list-item-avatar
        // TODO Get flexup avatar in api endpoint
        v-img(
          data-testid='thirdPartyAccountAvatar'
          :src="thirdPartyAccount.avatar"
          :alt="`${thirdPartyAccount.name}`"
        )
      v-card-text
        div(data-testid='thirdPartyAccountName') {{ thirdPartyAccount.name }}
        div(data-testid='thirdPartyAccountAddress') {{ thirdPartyAccount.address }}
        div(data-testid='thirdPartyAccountCity') {{ thirdPartyAccount.city }} {{ thirdPartyAccount.zip }}
        div(data-testid='thirdPartyAccountCountry' v-if="country") {{ country.name }} ({{ country.iso2 }})
        div(data-testid='thirdPartyAccountLegalStructure' v-if="legalStructure") {{ legalStructure.name }} ({{ legalStructure.sigle }})
</template>

<script>
export default {
  name: 'FvThirdPartyAccountCard',
  props: {
    thirdPartyAccountId: {
      type: Number,
      default() {
        return null
      },
    },
  },
  computed: {
    thirdPartyAccount() {
      const res = this.$store.getters['thirdPartyAccounts/find'](this.thirdPartyAccountId)
      return res
    },
    country() {
      if (!this.thirdPartyAccount) return null
      const countryId = this.thirdPartyAccount.country_id
      const res = this.$store.getters['countries/find'](countryId)
      return res
    },
    legalStructure() {
      if (!this.thirdPartyAccount) return null
      const legalStructureId = this.thirdPartyAccount.legal_structure_id
      const res = this.$store.getters['contracts/getLegalStructureById'](legalStructureId)
      return res
    },
  },
  mounted() {
    this.$store.dispatch('thirdPartyAccounts/getAll')
    this.$store.dispatch('countries/get')
  },
}
</script>
