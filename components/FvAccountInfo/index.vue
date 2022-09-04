<template lang="pug">
.fv-account-info
  p {{ $t('listAccounts.activeAccount') }}:
  fv-avatar-with-name(
    data-testid="accountInfo"
    :name="name"
    :avatar="avatar"
  )
</template>

<script>
export default {
  name: 'FvAccountInfo',
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
    this.$store.dispatch('accounts/get')
  }
}
</script>
