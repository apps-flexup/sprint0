<template lang="pug">
.fv-user-info
  p {{ $t('listAccounts.user') }}:
  fv-avatar-with-name(
    :name="name"
    :email="email"
  )
</template>

<script>
export default {
  name: 'FvUserInfo',
  data() {
    return {
      name: this.$auth.user.name,
      email: this.$auth.user.email
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
