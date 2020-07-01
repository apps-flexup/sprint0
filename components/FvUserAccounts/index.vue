<template lang="pug">
  .fv-user-accounts
    v-btn.mx-2(
      v-if="!$auth.loggedIn"
      v-bind='$attrs'
      v-on='on'
      @click="login"
    )
      | Connexion
    .d-flex.justify-center.align-center(v-else)
      v-menu(
        offset-y=''
      )
        template(v-slot:activator='{ attrs, on }')
          v-btn.mx-2(
            v-bind='attrs'
            v-on='on'
          )
            | {{ $auth.user.preferred_username }} {{ $activeAccount.get() }}
        v-list
          v-list-item(
            v-for='account in accounts'
            :key='account.id'
            @click.stop="setCurrentAccount(account)"
          )
            v-list-item-avatar
              img(:src='account.avatar')
            v-list-item-content
              v-list-item-title {{ account.name }}
          v-list-item
            v-list-item-content
              v-list-item-title
                v-btn(
                  @click="logout"
                  color="primary"
                ) Déconnexion
</template>

<script>
export default {
  name: 'FvUserAccounts',
  computed: {
    accounts() {
      const res = this.$store.getters['accounts/all']
      return res
    },
    loggedIn() {
      const res = this.$auth.loggedIn
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
    login() {
      this.$auth.loginWith('keycloak')
    },
    setCurrentAccount(a) {
      // envoyer dans le store l'account qui va bien
      console.log('Selected Account ', a.id)
      this.$activeAccount.set(a.id)
    }
  }
}
</script>
