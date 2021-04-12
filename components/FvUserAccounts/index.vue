<template lang="pug">
.fv-user-accounts
  fv-login-button(
    data-testid='loginBtn'
    v-if="!$auth.loggedIn"
  )
  .d-flex.justify-center.align-center(v-else)
    v-menu(
      data-testid='menu'
      offset-y=''
    )
      template(v-slot:activator='{ attrs, on }')
        v-btn.mx-2(
          data-testid='accountBtn'
          v-bind='attrs'
          v-on='on'
        )
          | {{ $auth.user.preferred_username }}
      fv-list-accounts
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
