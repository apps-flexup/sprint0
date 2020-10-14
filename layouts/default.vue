<template lang="pug">
  v-app(dark)
    fv-nav-bar(
      :title="title"
    )
    v-main
      v-container
        fv-breadcrumbs(
          :account="account"
          space="manage"
        )
        nuxt
    v-footer(:fixed="fixed" app)
      span &copy; {{ new Date().getFullYear() }}
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      title: 'Flexup - Sprint 0'
    }
  },
  computed: {
    account() {
      const id = this.$store.getters['accounts/selected']
      const res = this.$store.getters['accounts/findById'](id)
      if (res) return res.name
      return null
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
    this.$store.dispatch('accounts/get')
  }
}
</script>
