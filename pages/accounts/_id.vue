<template lang="pug">
.accounts-id
  fv-form(
    :payload='account'
    @form:submit="editAccount"
    url='accounts'
    :form='findAccountType'
    action='edit'
  )
</template>

<script>
export default {
  data() {
    return {
      accountId: this.$route.params.id
    }
  },
  computed: {
    account() {
      const res = this.$store.getters['accounts/findById'](this.accountId)
      return res
    },
    findAccountType() {
      const account = this.account
      const type = account.type.toLowerCase()
      const res = type + 'Accounts'
      return res
    }
  },
  methods: {
    editAccount(payload) {
      this.$store.dispatch('accounts/update', payload)
    }
  }
}
</script>
