<template lang="pug">
.page-business-third-party-account-new
  fv-form(
    :payload="thirdParty"
    url='thirdPartyAccounts'
    form='businessAccounts'
    action='new'
    @form:submit="createThirdParty"
  )
</template>

<script>
export default {
  data() {
    return {
      thirdParty: {
        type: 'Business',
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
