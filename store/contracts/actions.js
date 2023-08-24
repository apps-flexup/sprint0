// Action de base
export default {
  get({ dispatch }) {
    dispatch('contracts/getContracts', {}, { root: true })
    dispatch('contracts/getContractTypes', {}, { root: true })
    dispatch('contracts/getLegalStructures', {}, { root: true })
    dispatch('contracts/getStructures', {}, { root: true })
  },
  getContracts({ commit }) {
    // charger les contracts
    this.$repos.contracts.indexWithAccountId().then((data) => commit('set', data))
  },
  getContractTypes({ commit }) {
    // charger les contrat-types
    this.$repos.contractTypes.index().then((data) => commit('setContractTypes', data))
  },
  getLegalStructures({ commit }) {
    // charger les formes juridiques
    this.$repos.legalStructure.index().then((data) => commit('setLegalStructures', data))
  }
}
