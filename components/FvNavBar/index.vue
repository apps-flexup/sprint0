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
    div(
        class='line'
    )
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
        return 'manage'
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
  width: 2px;
  height: 100%;
  background-color: brown;
}
</style>
