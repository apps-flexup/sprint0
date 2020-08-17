<template lang="pug">
  v-app(dark)
    fv-nav-bar
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
      fixed: false
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
