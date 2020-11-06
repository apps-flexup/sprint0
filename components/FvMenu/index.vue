<template lang="pug">
.fv-menu
  v-list(
    expand
  )
  div(v-if='connected')
    fv-sub-menu(
      categoryName='space'
      :menuName="space"
      :title="spaceTitle"
    )
    fv-sub-menu(
      categoryName='account'
      menuName='account'
      :title="accountSelected"
    )
    fv-sub-menu(
      categoryName='user'
      menuName='user'
      :title="userName"
    )
    fv-show-menu(
      :list='globalMenu'
    )
    fv-logout-button(
      @logoutButton:clicked="logout"
    )
  div(v-else)
    fv-login-button(
      @loginButton:clicked="login"
    )
    hr.line
    fv-show-menu(
      :list='globalMenu'
    )
</template>

<script>
export default {
  name: 'FvMenu',
  props: {
    menuName: {
      type: String,
      default() {
        return null
      }
    },
    space: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    connected() {
      const res = this.$auth.loggedIn
      return res
    },
    userName() {
      const name = this.$auth.user.preferred_username
      return name
    },
    accountSelected() {
      const selectedAccount = this.$store.getters['accounts/selected']
      const account = this.$store.getters['accounts/findById'](selectedAccount)
      const res = account ? account.name : null
      return res
    },
    globalMenu() {
      const res = this.$store.getters['settings/globalMenu']
      return res
    },
    spaceTitle() {
      const res = this.$t(this.space + 'Menu.title')
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
