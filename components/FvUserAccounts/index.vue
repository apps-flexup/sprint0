<template lang="pug">
  .fv-user-accounts
    v-btn.mx-2(
      v-if="!loggedIn"
      v-bind='$attrs'
      v-on='on'
      @click="login"
    )
      | Connexion
    .d-flex.justify-center.align-center(v-else)
      v-menu(
        :key='text'
        offset-y=''
      )
        template(v-slot:activator='{ attrs, on }')
          v-btn.mx-2(
            v-bind='attrs'
            v-on='on'
          )
            | -User-
        v-list
          v-list-item(
            v-for='account in accounts'
            :key='account.id'
          )
            v-list-item-avatar
              v-img(:src='account.avatar')
            v-list-item-content
              v-list-item-title {{ account.name }}
          v-list-item
            v-list-item-content
              v-list-item-title
                v-btn(
                  @click="logout"
                  color="primary"
                ) Déconnexion
                //- v-list-item-avatar
                //-   v-avatar(color="indigo" size="36")
                //-     span.white--text.headline 36
                //- v-list-item-avatar
                //-   v-avatar(color="teal" size="48")
                //-     span.white--text.headline 48
                //- v-list-item-avatar
                //-   v-avatar(color="orange" size="62")
                //-     span.white--text.headline 62
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
    this.$store.dispatch('contacts/get')
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    login() {
      this.$auth.login()
    }
  }
}
</script>
