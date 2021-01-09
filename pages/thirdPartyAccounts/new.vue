<template lang="pug">
.page.third-party-account-new
  fv-form(
    :payload="thirdPartyAccount"
    @form:submit="createThirdPartyAccount"
    action='new'
    url='thirdPartyAccounts'
    form='thirdPartyAccounts'
  )
</template>

<script>
export default {
  data() {
    return {
      thirdPartyAccount: {}
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createThirdPartyAccount(thirdPartyAccount) {
      const payload = thirdPartyAccount
      this.$store.dispatch('thirdPartyAccounts/add', payload)
    }
  }
}
</script>
