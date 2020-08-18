import Vue from 'vue'

const auth = Vue.observable({
  loggedIn: false,
  loginWith(_param) {
    this.loggedIn = true
  },
  logout() {
    this.loggedIn = false
  },
  user: {
    preferred_username: 'toto'
  }
})
export default auth
