<template lang="pug">
  v-app(dark)
    v-navigation-drawer(
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    )
      fv-menu-list
    v-app-bar(:clipped-left="clipped" fixed app)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer")
      //- v-btn(icon @click.stop="miniVariant = !miniVariant")
      //-   v-icon mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
      //- v-btn(icon @click.stop="clipped = !clipped")
      //-   v-icon mdi-application
      //- v-btn(icon @click.stop="fixed = !fixed")
      //-   v-icon mdi-minus
      v-toolbar-title(v-text="title")
      v-spacer
      fv-user-accounts
    v-main
      v-container
        nuxt
    v-footer(:fixed="fixed" app)
      span &copy; {{ new Date().getFullYear() }}
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      title: 'Flexup - Sprint 0'
    }
  },
  mounted() {
    // charger tous les éléments unitaires de configuration
    this.$store.dispatch('categories/get')
    this.$store.dispatch('units/get')
    this.$store.dispatch('currencies/get')
    this.$store.dispatch('countries/get')
    this.$store.dispatch('contracts/getStructures')
    this.$store.dispatch('contracts/getLegalStructures')
  }
}
</script>
