<template lang="pug">
  .fv-menu
    v-list(
      expand
    )
    div(v-if='connected')
      fv-sub-menu(
        data-testid="spaceMenu"
        categoryName='space'
        :menuName="space"
        :title="spaceTitle"
      )
      fv-sub-menu(
        data-testid="accountMenu"
        categoryName='account'
        menuName='account'
        :title="accountSelected"
      )
      fv-sub-menu(
        data-testid="userMenu"
        categoryName='user'
        menuName='user'
        :title="userName"
      )
      fv-show-menu(
        data-testid="globalMenu"
        :list='globalMenu'
      )
      fv-logout-button(data-testid="logoutButton")
    div(v-else)
      fv-login-button(data-testid="loginButton")
      hr.line
      fv-show-menu(
        data-testid="globalMenu"
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
      return this.$auth.loggedIn
    },
    userName() {
      return this.$displayRules.userName()
    },
    accountSelected() {
      const activeAccount = this.$activeAccount.get()
      const account = this.$store.getters['accounts/findById'](activeAccount)
      return account ? account.name : null
    },
    globalMenu() {
      return this.$store.getters['settings/globalMenu']
    },
    spaceTitle() {
      return this.$t(this.space + 'Menu.title')
    }
  },
  mounted() {
    this.$store.dispatch('settings/getGlobalMenu')
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

/*
.v-list {
  padding: 3px 0;
}
*/
::v-deep /*.v-list-item__icon*/
 {
  min-width: initial !important;
  margin: 0 !important;
}

::v-deep /*.v-list-item */
 {
  min-height: 35px;
}
</style>
