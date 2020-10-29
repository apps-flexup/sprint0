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
    menuName: {
      type: String,
      default() {
        return null
      }
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getGlobalMenu')
    this.$store.dispatch('settings/getUserMenu')
    this.$store.dispatch('settings/getAccountMenu')
    this.$store.dispatch('settings/getBuyerMenu')
    this.$store.dispatch('settings/getManageMenu')
    this.$store.dispatch('settings/getSellerMenu')
  }
}
</script>
