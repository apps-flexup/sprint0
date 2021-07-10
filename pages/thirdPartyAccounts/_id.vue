<template lang="pug">
.third-party-account-id
  fv-form(
    :payload="thirdPartyAccount"
    @form:submit="editThirdPartyAccount"
    action='edit'
    url='thirdPartyAccounts'
    form='thirdPartyAccounts'
  )
</template>

<script>
export default {
  computed: {
    thirdPartyAccount() {
      const thirdPartyId = this.$route.params.id
      const thirdParty = this.$store.getters['thirdPartyAccounts/find'](
        thirdPartyId
      )
      const res = JSON.parse(JSON.stringify(thirdParty))
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('thirdPartyAccounts/get')
  },
  methods: {
    editThirdPartyAccount(payload) {
      this.$store.dispatch('thirdPartyAccounts/add', payload)
    }
  }
}
</script>
