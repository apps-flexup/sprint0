<template lang="pug">
  v-btn.mx-2(
    @click.stop="click"
  ) {{ $t('buttons.login') }}
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
