<template lang="pug">
  v-app(dark)
    component(
      :is="'fv-nav-bar-' + space"
      :title="title"
      :space='space'
    )
    v-main
      v-container
        fv-breadcrumbs(
          :account="account"
          :space="space"
        )
        nuxt
    v-footer(:fixed="fixed" app)
      span &copy; {{ new Date().getFullYear() }}
</template>

<script>
export default {
  props: {
    space: {
      type: String,
      default() {
        return 'buyer'
      }
    }
  },
  data() {
    return {
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
