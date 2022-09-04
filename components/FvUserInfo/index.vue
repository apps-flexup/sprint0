<template lang="pug">
.fv-user-info
  p {{ $t('listAccounts.user') }}:
  fv-avatar-with-name(
    data-testid='userInfo'
    :name="name"
    :email="email"
  )
</template>

<script>
export default {
  name: 'FvUserInfo',
  data() {
    return {
      email: this.$auth.user.email
    }
  },
  computed: {
    name() {
      return this.$displayRules.userName()
    }
  }
}
</script>
