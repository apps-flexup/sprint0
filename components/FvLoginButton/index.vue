<template lang="pug">
  .fv-login-button
    v-list-item(
      data-testid="button"
      @click="login"
    )
      v-list-item-action
        v-icon {{ "mdi-login" }}
      v-list-item-content
        v-list-item-title(v-text="$t('buttons.login')")
</template>

<script>
export default {
  name: 'FvLoginButton',
  methods: {
    login() {
      // this.$auth.loginWith('keycloak')
      console.log('keykloak login')
    }
  }
}
</script>
