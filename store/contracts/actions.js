// Action de base
export default {
  // $nuxt.$store.dispatch('contracts/get')
  get({ dispatch }) {
    dispatch('contracts/getContracts', {}, { root: true })
    dispatch('contracts/getContractTypes', {}, { root: true })
    dispatch('contracts/getStructures', {}, { root: true })
  },
  getContracts({ commit }) {
    // charger les contracts
    this.$repos.contracts.index().then((data) => commit('set', data))
  },
  getContractTypes({ commit }) {
    // charger les contrat-types
    this.$repos.contractTypes
      .index()
      .then((data) => commit('setContractTypes', data))
  },
  getStructures({ commit }) {
    // charger les structures
    this.$repos.structures.index().then((data) => commit('setStructures', data))
  }
}
