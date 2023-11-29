<template lang="pug">
  div
    form(@submit.prevent='userLogin')
      div
        label(for='username') User name
        input#username(type='text' v-model='login.username' )
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

<style scoped>
div {
  margin: 10px;
}

input {
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
}

button {
  margin: 5px;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  background-color: rgb(151, 169, 211);
}

label {
  display: inline-block;
  margin: 5px;
  width: 100px;
}
</style>
```
