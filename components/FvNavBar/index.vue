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
    :clipped-left="clipped"
    fixed
    app
  )
    v-app-bar-nav-icon(@click.stop="drawer = !drawer")
    v-toolbar-title.mr-16(v-text="title")
    fv-nav-bar-slots-left(
      :space='space'
    )
    v-spacer
    fv-nav-bar-slots-right(
      :space='space'
    )
    div(
        class='line'
    )
    p(class='titleNavbar').mb-0  {{ $t(space + 'Menu.title') }}
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
        return 'buyer'
      }
    }
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
.line {
  width: 1px;
  height: 100%;
  margin: 0 20px;
  background-color: lightgray;
}
.titleNavbar {
  text-transform: uppercase;
  font-weight: 300;
}
::v-deep .v-toolbar__content {
  padding: 0 16px;
}
</style>
