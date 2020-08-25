<template lang="pug">
.fv-list-accounts
  v-list-item(
    v-for='account in accounts'
    :key='account.id'
    @click.stop="setCurrentAccount(account)"
  )
    fv-account(
      :avatar="account.avatar"
      :name="account.name"
    )
  v-list-item
    v-list-item-content
      v-list-item-title
        fv-logout-button(
          @logoutButton:clicked="logout"
        )
</template>

<script>
export default {
  name: 'FvListAccounts',
  computed: {
    accounts() {
      const res = this.$store.getters['accounts/all']
      console.log(res)
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('accounts/get')
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    setCurrentAccount(a) {
      // envoyer dans le store l'account qui va bien
      this.$activeAccount.set(a.id)
    }
  }
}
</script>
