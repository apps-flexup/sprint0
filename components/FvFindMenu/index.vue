<template lang="pug">
.fv-find-menu
    v-list
      v-list-item(
          v-for="(item, a) in findMenu"
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
  name: 'FvFindMenu',
  props: {
    menuName: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    findMenu() {
      const res = this.$store.getters['settings/' + this.menuName + 'Menu']
      return res
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
