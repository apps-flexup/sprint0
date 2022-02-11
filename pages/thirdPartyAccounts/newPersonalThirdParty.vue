<template lang="pug">
.page-business-third-party-account-new
  fv-form(
    :payload="thirdParty"
    url='thirdPartyAccounts'
    form='personalAccounts'
    action='new'
    @form:submit="createThirdParty"
  )
</template>

<script>
export default {
  data() {
    return {
      thirdParty: {
        type: 'Personal',
        directory: 'Local',
      },
    }
  },
  methods: {
    createThirdParty(payload) {
      this.$store.dispatch('thirdPartyAccounts/add', payload)
    },
  },
}
</script>
