<template lang="pug">
.fv-menu-list
  v-list(
    expand
  )
  div(v-if='connected')
    fv-sub-menu(
      categoryName = 'space'
      menuName = 'buyer'
    )
    fv-sub-menu(
      categoryName = 'account'
      menuName = 'account'
    )
    fv-sub-menu(
      categoryName = 'user'
      menuName = 'user'
    )
    fv-global-menu
    fv-logout-button(
      @logoutButton:clicked="logout"
    )
  div(v-else)
    fv-login-button(
      @loginButton:clicked="login"
    )
    hr.line
    fv-global-menu
</template>

<script>
import '@/style/icon_margin.css'

export default {
  name: 'FvMenuList',
  computed: {
    connected() {
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
  margin: 20px 0;
}
</style>
