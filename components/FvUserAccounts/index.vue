<template lang="pug">
.fv-user-accounts
  fv-login-button(
    data-testid='loginBtn'
    v-if="!$auth.loggedIn"
  )
  .d-flex.justify-center.align-center(v-else)
    v-menu(
      data-testid='menu'
      offset-y=''
    )
      template(v-slot:activator='{ attrs, on }')
        v-btn.mx-2(
          data-testid='accountBtn'
          v-bind='attrs'
          v-on='on'
        )
          | {{ $auth.user.preferred_username }}
      fv-list-accounts(data-testid="accountList")
</template>

<script>
export default {
  name: 'FvUserAccounts',
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
