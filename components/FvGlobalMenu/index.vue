<template lang="pug">
.fv-global-menu
    v-list
      v-list-item(
          v-for="(item, a) in globalMenu"
          :key="a"
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
  name: 'FvGlobalMenu',
  computed: {
    globalMenu() {
      const res = this.$store.getters['settings/globalMenu']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getGlobalMenu')
  }
}
</script>

<style scoped>
.title {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1.15rem !important;
}
</style>
