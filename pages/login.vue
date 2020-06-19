<template>
  <div>
    <h3>Login</h3>
    <button type="primary" @click="login()">Login via Keycloak</button>
    <pre>
      [{{ $auth.user }}]
    </pre>
  </div>
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
