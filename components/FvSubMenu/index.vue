<template lang="pug">
.fv-sub-menu
    v-list
      i.category(v-text="$t('category.' + categoryName)")
      v-list-group(
        :value='true'
      )
        template(v-slot:activator)
          fv-title-menu(
            :categoryName='categoryName'
            :menuName='menuName'
          )
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
      hr.line
</template>

<script>
export default {
  name: 'FvSubMenu',
  props: {
    categoryName: {
      type: String,
      default() {
        return null
      }
    },
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
    this.$store.dispatch('settings/getUserMenu')
    this.$store.dispatch('settings/getAccountMenu')
    this.$store.dispatch('settings/getBuyerMenu')
    this.$store.dispatch('settings/getManageMenu')
    this.$store.dispatch('settings/getSellerMenu')
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
