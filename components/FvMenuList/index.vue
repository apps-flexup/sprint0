<template lang="pug">
.fv-menu-list
  v-list(
    expand
  )
  div(v-if='connected')
    fv-space-menu(
      :space='space'
    )
    fv-account-menu
    fv-user-menu
    fv-logout-button(
      @logoutButton:clicked="logout"
    )
  div(v-else)
    fv-login-button(
      @loginButton:clicked="login"
    )
    hr.line
</template>

<script>
import '@/.storybook/style/icon_margin.css'

export default {
  name: 'FvMenuList',
  props: {
    space: {
      type: String,
      default() {
        return 'buyerMenu'
      }
    }
  },
  computed: {
    userMenu() {
      const res = this.$store.getters['settings/userMenu']
      return res
    },
    userName() {
      const name = this.$auth.user.preferred_username
      return name
    },
    accountMenu() {
      const res = this.$store.getters['settings/accountMenu']
      return res
    },
    connected() {
      const res = this.$auth.loggedIn
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getManageMenu')
    this.$store.dispatch('settings/getUserMenu')
    this.$store.dispatch('settings/getAccountMenu')
  },
  methods: {
    logout() {
      this.$auth.logout()
    },
    login() {
      this.$auth.loginWith('keycloak')
    }
  }
}
</script>

<style scoped>
.line {
  width: 92%;
  float: right;
  border-style: hidden;
  height: 1.5pt;
  background-color: lightgrey;
}
</style>
