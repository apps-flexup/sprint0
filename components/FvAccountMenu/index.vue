<template lang="pug">
.fv-account-menu
    v-list-group(
      :value='true'
    )
      template(v-slot:activator)
        v-list-item-title.title Discovery
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
    hr.line
</template>

<script>
export default {
  name: 'FvMenuList',
  computed: {
    accountMenu() {
      const res = this.$store.getters['settings/accountMenu']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getAccountMenu')
  }
}
</script>

<style scoped>
.title {
  font-weight: 800;
  text-transform: uppercase;
  padding: 0 0px;
}
.line {
  width: 92%;
  float: right;
  border-style: hidden;
  height: 1.5pt;
  background-color: lightgrey;
}
</style>
