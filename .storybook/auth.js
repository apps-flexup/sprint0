import Vue from 'vue'

const auth = Vue.observable({
  loggedIn: true,
  loginWith(_param) {
    this.loggedIn = true
  },
  logout() {
    this.loggedIn = false
  },
  user: {
    preferred_username: 'toto',
    family_name: "Weil",
    name: "Simone",
    email: "simone@weil.com"
  }
})
export default auth
