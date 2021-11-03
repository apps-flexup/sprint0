<template lang="pug">
.fv-login-button
  v-list-item(
    data-testid="button"
    @click="click"
  )
    v-list-item-action
      v-icon {{ 'mdi-login' }}
    v-list-item-content
      v-list-item-title(v-text="$t('buttons.login')")
</template>

<script>
export default {
  name: 'FvLoginButton',
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    click() {
      this.$auth.loginWith('keycloak')
    }
  }
}
</script>
