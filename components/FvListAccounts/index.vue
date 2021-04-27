<template lang="pug">
.fv-list-accounts
  v-list
    v-list-item.user-info
      fv-user-info(data-testid="userInfo")
    v-divider
    v-list-item.account-info
      fv-account-info(data-testid="accountInfo")
    v-divider
    v-list-item Autres comptes:
    v-list-item(
      data-testid="otherAccount"
      v-for='account in otherAccounts'
      :key='account.id'
      @click="setCurrentAccount(account)"
    )
      fv-account(
        :avatar="account.avatar"
        :name="account.name"
      )
    v-list-item.createAccount(
      data-testid="createAccount"
      @click="createAccount"
    )
      fv-icon(
        icon="mdi-plus-circle-outline"
      )
      div.right {{ $t('listAccounts.createAccount') }}
    v-divider
    v-list-item(
      data-testid="manageAccounts"
      @click="manageAccounts"
    ) {{ $t('listAccounts.manageAccounts') }}
    v-divider
    v-list-item(
      data-testid="help"
      @click="help"
    ) {{ $t('listAccounts.help') }}
    v-list-item(
      data-testid="logout"
      @click="logout"
    ) {{ $t('listAccounts.logout') }}
</template>

<script>
export default {
  name: 'FvListAccounts',
  computed: {
    otherAccounts() {
      const res = this.$store.getters['accounts/others']
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
    },
    createAccount() {
      this.$router.push('/accounts/new')
    },
    manageAccounts() {
      this.$router.push('accounts')
      console.log('manage accounts')
    },
    help() {
      console.log('help')
    }
  }
}
</script>

<style scoped>
.createAccount {
  display: flex !important;
  align-items: center;
}
.right {
  margin-left: 15px;
}
.user-info {
  margin-bottom: 15px;
}
.account-info {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
