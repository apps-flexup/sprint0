<template lang="pug">
  div.text-md-center
    h3 Login
    v-btn(@click.stop="login" color="primary") Login via Keycloak
</template>

<script>
export default {
  methods: {
    login() {
      this.$auth.loginWith('keycloak')
    }
  }
}
</script>
