<template lang="pug">
.fv-logout-button
  v-list-item(
    data-testid="button"
    @click="logout"
  )
    v-list-item-action
      v-icon {{ 'mdi-logout' }}
    v-list-item-content
      v-list-item-title(v-text="$t('buttons.logout')")
</template>

<script>
export default {
  name: 'FvLogoutButton',
  methods: {
    logout() {
      this.$router.push('/logout')
    }
  }
}
</script>
