<template lang="pug">
.fv-space-menu
  div(v-if="seller === 'seller'")
    v-list-group(
        :value='true'
      )
        template(v-slot:activator)
          v-list-item-title.title(v-text="$t('sellerMenu.title')")
        v-list-item(
            v-for="(item, a) in sellerMenu"
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
  div(v-else-if="seller === 'buyer'")
    v-list-group(
        :value='true'
      )
        template(v-slot:activator)
          v-list-item-title.title(v-text="$t('buyerMenu.title')")
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
    hr.line
  div(v-else-if="seller === 'manage'")
    v-list-group(
        :value='true'
      )
        template(v-slot:activator)
          v-list-item-title.title(v-text="$t('manageMenu.title')")
        v-list-item(
            v-for="(item, a) in manageMenu"
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
  div(v-else)
    p ya rien ici
</template>

<script>
export default {
  name: 'FvSpaceMenu',
  props: {
    seller: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    buyerMenu() {
      const res = this.$store.getters['settings/buyerMenu']
      return res
    },
    sellerMenu() {
      const res = this.$store.getters['settings/sellerMenu']
      return res
    },
    manageMenu() {
      const res = this.$store.getters['settings/manageMenu']
      return res
    },
    connected() {
      const res = this.$auth.loggedIn
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getBuyerMenu')
    this.$store.dispatch('settings/getManageMenu')
    this.$store.dispatch('settings/getSellerMenu')
  },
  methods: {
    click() {
      console.log('click')
    }
  }
}
</script>

<style scoped>
.title {
  font-weight: 800;
  text-transform: uppercase;
  padding: 0 2px;
}
.line {
  width: 92%;
  float: right;
  border-style: hidden;
  height: 1.5pt;
  background-color: lightgrey;
}
</style>
