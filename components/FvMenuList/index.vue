<template lang="pug">
.fv-menu-list
  v-list
    div.user {{ userName }}
    v-list-item(
      v-for="(item, i) in userMenu"
      :key="i"
      :to="item.to"
      router
      exact
    )
      v-list-item-action
        v-icon {{ item.icon }}
      v-list-item-content
        v-list-item-title(v-text="$t(item.title)")
    hr
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
    },
    userMenu() {
      const res = this.$store.getters['settings/userMenu']
      return res
    },
    userName() {
      const name = this.$auth.user.preferred_username
      return name
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getMenu')
    this.$store.dispatch('settings/getUserMenu')
    this.$store.dispatch('accounts/get')
  }
}
</script>
