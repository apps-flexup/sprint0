<template lang="pug">
.fv-third-party-account-card
  v-card(v-if="thirdPartyAccount")
    v-list-item
      v-list-item-avatar
        // TODO Get flexup avatar in api endpoint
        v-img(
          :src="thirdPartyAccount.avatar"
          :alt="`${thirdPartyAccount.name}`"
        )
      v-card-text
        div {{ thirdPartyAccount.name }}
        div {{ thirdPartyAccount.address }}
        div {{ thirdPartyAccount.city }} {{ thirdPartyAccount.zip }}
        div(v-if="country") {{ country.name }} ({{ country.iso2 }})
        div(v-if="legalStructure") {{ legalStructure.name }} ({{ legalStructure.sigle }})
</template>

<script>
export default {
  name: 'FvThirdPartyAccountCard',
  props: {
    thirdPartyAccountId: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    thirdPartyAccount() {
      const res = this.$store.getters['thirdPartyAccounts/find'](
        this.thirdPartyAccountId
      )
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
      const res = this.$store.getters['contracts/getLegalStructureById'](
        legalStructureId
      )
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('thirdPartyAccounts/getAll')
    this.$store.dispatch('countries/get')
  }
}
</script>
