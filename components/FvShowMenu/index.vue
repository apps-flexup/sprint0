<template lang="pug">
.fv-show-menu
  v-list
    v-list-item(
      v-for="(item, a) in list"
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
  name: 'FvShowMenu',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
