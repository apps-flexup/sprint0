<template lang="pug">
.third-party-account-id
  fv-form.mt-5(
    :payload='thirdParty'
    @form:submit="editThirdParty"
    url='thirdPartyAccounts'
    :form='formForThirdPartyAccountType'
    action="read"
    :allowEdit="canEdit"
  )
</template>

<script>
export default {
  computed: {
    thirdParty() {
      const thirdPartyId = this.$route.params.id
      const thirdParty = this.$store.getters['thirdPartyAccounts/find'](thirdPartyId)
      const res = JSON.parse(JSON.stringify(thirdParty))
      return res
    },
    formForThirdPartyAccountType() {
      if (!this.thirdParty) return 'PersonalAccount'
      const type = this.thirdParty.type.toLowerCase()
      const res = this.thirdParty.type === 'SubAccount' ? 'subAccounts' : `${type}Accounts`
      return res
    },
    canEdit() {
      return this.$rights.canEditThirdParty()
    }
  },
  mounted() {
    this.$store.dispatch('thirdPartyAccounts/get')
  },
  methods: {
    editThirdParty(payload) {
      this.$store.dispatch('thirdPartyAccounts/add', payload)
    }
  }
}
</script>
