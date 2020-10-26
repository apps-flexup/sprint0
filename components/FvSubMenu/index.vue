<template lang="pug">
.fv-sub-menu
    v-list
      i.category(v-text="$t('category.' + categoryName)")
      v-list-group(
        :value='true'
      )
        template(v-slot:activator)
          v-list-item-title.title {{ findName }}
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
    }
  },
  computed: {
    findMenu() {
      const res = this.$store.getters['settings/' + this.categoryName + 'Menu']
      return res
    },
    findName() {
      if (this.categoryName === 'user') {
        const name = this.$auth.user.preferred_username
        return name
      } else if (this.categoryName === 'account') {
        const selectedAccount = this.$store.getters['accounts/selected']
        const account = this.$store.getters['accounts/findById'](
          selectedAccount
        )
        const res = account ? account.name : null
        return res
      } else {
        alert('Error : Wrong category name ')
        return null
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getUserMenu')
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
