<template lang="pug">
.page-new-sub-account
  fv-form(
    :payload='account'
    @form:submit="createAccount"
    url='accounts'
    form="subAccounts"
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
        type: 'SubAccount'
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createAccount(account) {
      this.$store.dispatch('accounts/add', account)
    }
  }
}
</script>
