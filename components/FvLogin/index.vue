<template lang="pug">
  div
    form(@submit.prevent='userLogin')
      div
        label(for='username') Username
        input#username(type='text' v-model='login.username')
      div
        label(for='password') Password
        input#password(type='text' v-model='login.password')
      div
        button(type='submit') Submit
</template>

<script>
export default {
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login
        })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
