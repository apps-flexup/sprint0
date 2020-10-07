<template lang="pug">
.fv-space-menu
  div(v-if="seller")
    div.title VENDRE
  div(v-else)
    div.title ACHETER
  div(v-if="connected")
    div(v-if="seller")
      v-list-group(:sub-group='false')
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
    div(v-else)
      v-list-group(:sub-group='false')
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
  div(v-else-if="seller")
    v-list-item(
      @click.stop="click"
    )
      v-list-item-action
        v-icon {{ 'mdi-arrow-right-bold-circle-outline' }}
      v-list-item-content
        v-list-item-title(v-text="$t('sellerMenu.start')")
    hr
  div(v-else)
    v-list-item(
      @click.stop="click"
    )
      v-list-item-action
        v-icon {{ 'mdi-magnify' }}
      v-list-item-content
        v-list-item-title(v-text="$t('buyerMenu.search')")
    hr
</template>

<script>
export default {
  name: 'FvSpaceMenu',
  props: {
    seller: {
      type: Boolean,
      default() {
        return true
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
    connected() {
      const res = this.$auth.loggedIn
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getBuyerMenu')
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
  padding: 0 20px;
}
</style>
