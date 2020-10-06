<template lang="pug">
.fv-account-info
  p {{ $t('activeAccount') }}:
  fv-avatar-with-name(
    :name="name"
    :avatar="avatar"
  )
</template>

<script>
export default {
  name: 'FvUserInfo',
  computed: {
    account() {
      const current = this.$store.getters['accounts/current']
      const res = this.$store.getters['accounts/findById'](current)
      return res
    },
    name() {
      if (!this.account) return null
      const res = this.account.name
      return res
    },
    avatar() {
      if (!this.account) return null
      const res = this.account.avatar
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('accounts/get')
  }
}
</script>
