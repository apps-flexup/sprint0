<template lang="pug">
.fv-user-menu
    v-list
      i.category utilisateur :
      v-list-group(
        :value='true'
      )
        template(v-slot:activator)
          v-list-item-title.title {{userName}}
        v-list-item(
            v-for="(item, a) in userMenu"
            :key="a"
            :to="item.to"
            router
            exact
          )
            v-list-item-action
              v-icon {{ item.icon }}
            v-list-item-content
              v-list-item-title(v-text="$t(item.title)")
      hr.line
</template>

<script>
export default {
  name: 'FvUserMenu',
  computed: {
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
    this.$store.dispatch('settings/getUserMenu')
  }
}
</script>

<style scoped>
.title {
  font-weight: 800;
  text-transform: uppercase;
  font-size: 1.15rem !important;
}
.line {
  width: 92%;
  float: right;
  border-style: hidden;
  height: 1.5pt;
  background-color: lightgrey;
  margin: 20px 0;
}
.category {
  padding: 0 16px;
  text-transform: uppercase;
  font-size: 0.8rem;
}
</style>
