<template lang="pug">
.fv-menu-list
  v-list
    fv-space-menu
    div(v-if="connected")
      div.title Discovery
      v-list-group( :sub-group='false')
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
      hr
      div.title {{ userName }}
      v-list-group( :sub-group='false')
        v-list-item(
          v-for="(item, i) in userMenu"
          :key="i"
          :to="item.to"
          router
          exact
        )
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title(v-text="$t(item.title)")
      hr
      v-list-item(
        v-for="(item, y) in items"
        :key="y"
        :to="item.to"
        router
        exact
      )
        v-list-item-action
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text="$t(item.title)")
      fv-logout-button(
        @logoutButton:clicked="logout"
      )
    div(v-else)
      fv-login-button(
        @loginButton:clicked="login"
      )
      hr
      v-list-item(
        v-for="(item, y) in items"
        :key="y"
        :to="item.to"
        router
        exact
      )
        v-list-item-action
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title(v-text="$t(item.title)")
</template>

<script>
export default {
  name: 'FvMenuList',
  props: {
    ezffez: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  computed: {
    items() {
      const res = this.$store.getters['settings/menu']
      return res
    },
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
    this.$store.dispatch('settings/getMenu')
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
  padding: 0 20px;
}
</style>
