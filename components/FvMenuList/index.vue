<template lang="pug">
.fv-menu-list
  v-list
    v-list-item(
      v-for="(item, i) in items"
      :key="i"
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
  name: 'FvMenuList',
  computed: {
    items() {
      const res = this.$store.getters['settings/menu']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getMenu')
  }
}
</script>
