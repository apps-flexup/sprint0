<template lang="pug">
.fv-menu-list
  v-list(
    expand
  )
  div(v-if='connected')
    fv-space-menu(
      :seller='seller'
    )
    v-list-group(
      :value='true'
    )
      template(v-slot:activator)
        v-list-item-title.title Discovery
      v-list-item(
          v-for="(item, a) in accountMenu"
          :key="a"
          :to="item.to"
          router
          exact
        )
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text="$t(item.title)")
    hr.line
    v-list-group(
      :value='true'
    )
      template(v-slot:activator)
        v-list-item-title.title {{userName}}
      v-list-item(
          v-for="(item, a) in userMenu"
          :key="a"
          :to="item.to"
          router
          exact
        )
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text="$t(item.title)")
    hr.line
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
export default {
  name: 'FvMenuList',
  props: {
    seller: {
      type: String,
      default() {
        return 'manage'
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
.title {
  font-weight: 800;
  text-transform: uppercase;
  padding: 0 0px;
}
.line {
  width: 92%;
  float: right;
  border-style: hidden;
  height: 1.5pt;
  background-color: lightgrey;
}
</style>
