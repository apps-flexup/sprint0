<template lang="pug">
.fv-title-menu
  div(v-if="categoryName === 'space'")
    v-list-item-title.title(v-text="$t(menuName + 'Menu.title')")
  div(v-else-if="categoryName === 'user' || 'account'")
    v-list-item-title.title {{ findName }}
  div(v-else)
    v-list-item-title.title
</template>

<script>
export default {
  name: 'FvTitleMenu',
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
        return 'invité'
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>

<style scoped>
.title {
  font-weight: 800;
  text-transform: uppercase;
}
</style>
