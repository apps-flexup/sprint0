<template lang="pug">
.fv-login-button
  v-list-item(
    @click.stop="click"
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
      this.$emit('loginButton:clicked')
    }
  }
}
</script>
