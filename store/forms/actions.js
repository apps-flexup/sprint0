// Action de base
export default {
  getContract({ commit }) {
    // charger les contrat-types
    this.$repos.contractSteps
      .index()
      .then((data) => commit('setContractSteps', data))
  },
  getPartner({ commit }) {
    // charger les formes juridiques
    this.$repos.partnerSteps
      .index()
      .then((data) => commit('setPartnerSteps', data))
  }
}
