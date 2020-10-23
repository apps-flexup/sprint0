<template lang="pug">
.fv-account-menu
    v-list
      i.category compte :
      v-list-group(
        :value='true'
      )
        template(v-slot:activator)
          v-list-item-title.title {{accountName}}
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
  name: 'FvAccountMenu',
  computed: {
    accountMenu() {
      const res = this.$store.getters['settings/accountMenu']
      return res
    },
    accountName() {
      const selectedAccount = this.$store.getters['accounts/selected']
      const account = this.$store.getters['accounts/findById'](selectedAccount)
      const res = account ? account.name : null
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
