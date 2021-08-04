<template lang="pug">
.page-new-business-account
  fv-form(
    :payload='account'
    @form:submit="createAccount"
    url='accounts'
    form="businessAccounts"
    action='new'
  )
</template>

<script>
export default {
  data() {
    return {
      account: {
        parent_type: 'Account',
        parent_id: this.$activeAccount.get(),
        type: 'Business'
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createAccount(payload) {
      this.$store.dispatch('accounts/add', payload)
    }
  }
}
</script>
