<template lang="pug">
.fv-nav-bar
  v-navigation-drawer(
    v-model="drawer"
    :mini-variant="miniVariant"
    :clipped="clipped"
    fixed
    app
  )
    fv-menu(
      :space="space"
    )
  v-app-bar(
    data-testid='navbar'
    :clipped-left="clipped"
    fixed
    app
  )
    v-app-bar-nav-icon(@click.stop="drawer = !drawer" data-testid="icon-navbar")
    v-toolbar-title.mr-16(v-text="title" data-testid="title-navbar")
    div(v-if="$auth.loggedIn" data-testid="slot-left" class="slot")
      slot(name='left')
    v-spacer
    div(v-if="$auth.loggedIn" data-testid="slot-right" class="slot")
      slot(name='right')
    div(class='line')
    p(class='titleNavbar' v-if="$auth.loggedIn" data-testid="space-navbar").mb-0  {{ $t(space + 'Menu.title') }}
    fv-user-accounts
</template>

<script>
export default {
  name: 'FvNavBar',
  props: {
    title: {
      type: String,
      default() {
        return ''
      }
    },
    space: {
      type: String,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getSellerNavBar')
    this.$store.dispatch('settings/getManageNavBar')
  }
}
</script>

<style scoped>
.line {
  width: 1px;
  height: 100%;
  margin: 0 10px;
  background-color: lightgray;
}
.titleNavbar {
  text-transform: uppercase;
  font-weight: 300;
  padding: 0 16px;
}
.slot {
  display: contents;
}
::v-deep .v-toolbar__content,
.v-toolbar__extension {
  padding: 0 12px;
}
</style>
