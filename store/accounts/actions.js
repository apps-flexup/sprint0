// Action de base
export default {
  get({ commit }) {
    // charger les contracts
    console.log('sub :', this.$auth.user.sub)
    const payload = {
      user_id: this.$auth.user.sub
    }
    this.$axios.$get('contacts', payload).then((data) => commit('set', data))
    // this.$repos.accounts.index(payload).then((data) => commit('set', data))
  }
}
