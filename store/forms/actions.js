// Action de base
export default {
  getContract({ commit }) {
    // charger les contrat-types
    this.$repos.contractSteps
      .index()
      .then((data) => commit('setContractSteps', data))
  },
  getContact({ commit }) {
    // charger les formes juridiques
    this.$repos.contactSteps
      .index()
      .then((data) => commit('setContactSteps', data))
  }
}
