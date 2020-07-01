// Action de base
export default {
  get({ dispatch }) {
    dispatch('contracts/getContracts', {}, { root: true })
    dispatch('contracts/getContractTypes', {}, { root: true })
    dispatch('contracts/getFormesJuridiques', {}, { root: true })
    dispatch('contracts/getStructures', {}, { root: true })
  },
  getContracts({ commit }) {
    // charger les contracts
    this.$repos.contracts.indexAccount().then((data) => commit('set', data))
  },
  getContractTypes({ commit }) {
    // charger les contrat-types
    this.$repos.contractTypes
      .index()
      .then((data) => commit('setContractTypes', data))
  },
  getFormesJuridiques({ commit }) {
    // charger les formes juridiques
    this.$repos.formesJuridiques
      .index()
      .then((data) => commit('setFormesJuridiques', data))
  },
  getStructures({ commit }) {
    // charger les structures
    this.$repos.structures.index().then((data) => commit('setStructures', data))
  }
}
