<template lang="pug">
  div.text-md-center
    h3 Login
    v-btn(@click.stop="loginKeycloak" color="primary") Login via Keycloak
    FvLogin
</template>

<script>
export default {
  methods: {
    loginKeycloak() {
      this.$auth.loginWith('keycloak')
    }
  }
}
</script>
