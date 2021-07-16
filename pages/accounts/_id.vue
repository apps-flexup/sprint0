<template lang="pug">
.accounts-id
  v-tabs
    v-tab General
    v-tab(v-if="accountType === 'SubAccount'") Proprio
    v-tab-item
      fv-form(
        :payload='account'
        @form:submit="editAccount"
        url='accounts'
        :form='formForAccountType'
        action="read"
      )
    v-tab-item(v-if="accountType === 'SubAccount'")
      p plop
</template>

<script>
export default {
  data() {
    return {
      accountId: this.$route.params.id,
      tab: null
    }
  },
  computed: {
    account() {
      const res = this.$store.getters['accounts/findById'](this.accountId)
      return res
    },
    accountType() {
      const account = this.account
      const type = account.type
      return type
    },
    formForAccountType() {
      const account = this.account
      const type = account.type.toLowerCase()
      const res =
        account.type === 'SubAccount' ? 'subAccounts' : `${type}Accounts`
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
