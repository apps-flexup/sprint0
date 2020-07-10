// Action de base
export default {
  get({ dispatch }) {
    dispatch('contracts/getContracts', {}, { root: true })
    dispatch('contracts/getContractTypes', {}, { root: true })
    dispatch('contracts/getLegalStructure', {}, { root: true })
    dispatch('contracts/getStructures', {}, { root: true })
  },
  getContracts({ commit }) {
    // charger les contracts
    this.$repos.contracts
      .indexWithAccountId()
      .then((data) => commit('set', data))
  },
  getContractTypes({ commit }) {
    // charger les contrat-types
    this.$repos.contractTypes
      .index()
      .then((data) => commit('setContractTypes', data))
  },
  getLegalStructure({ commit }) {
    // charger les formes juridiques
    this.$repos.legalStructure
      .index()
      .then((data) => commit('setLegalStructures', data))
  },
  getStructures({ commit }) {
    // charger les structures
    this.$repos.structures.index().then((data) => commit('setStructures', data))
  }
}
