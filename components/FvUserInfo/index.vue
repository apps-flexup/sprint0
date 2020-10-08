<template lang="pug">
.fv-user-info
  p {{ $t('listAccounts.user') }}:
  fv-avatar-with-name(
    :name="name"
    :familyName="family_name"
    :email="email"
  )
</template>

<script>
export default {
  name: 'FvUserInfo',
  data() {
    return {
      name: this.$auth.user.name,
      family_name: this.$auth.user.family_name,
      email: this.$auth.user.email
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
