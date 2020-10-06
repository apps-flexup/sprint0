<template lang="pug">
.fv-menu-list
  v-list
    div.title Discovery
    v-list-item(
      v-for="(item, a) in accountMenu"
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
    template(v-slot:activator='')
      v-list-item-title Users
    v-list-group(:value='true' :sub-group='false')
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
      v-for="(item, y) in items"
      :key="y"
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
  props: {
    text: {
      type: String,
      default() {
        return 'ta mere'
      }
    }
  },
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
    },
    accountMenu() {
      const res = this.$store.getters['settings/accountMenu']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getMenu')
    this.$store.dispatch('settings/getUserMenu')
    this.$store.dispatch('settings/getAccountMenu')
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
