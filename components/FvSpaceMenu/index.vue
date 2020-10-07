<template lang="pug">
.fv-space-menu
  div.title ACHETER
  v-list-group(:sub-group='false')
    v-list-item(
      v-for="(item, a) in buyerMenu"
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
</template>

<script>
export default {
  name: 'FvSpaceMenu',
  computed: {
    buyerMenu() {
      const res = this.$store.getters['settings/buyerMenu']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getBuyerMenu')
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
