<template lang="pug">
.fv-logout-button
  v-btn(
    @click.stop="click"
    color="primary"
  ) {{ $t('buttons.logout') }}
</template>

<script>
export default {
  name: 'FvLogoutButton',
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    click() {
      this.$emit('logoutButton:clicked')
    }
  }
}
</script>
