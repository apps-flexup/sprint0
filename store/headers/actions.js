// Action de base
export default {
  getContractHeaders({ commit }) {
    // charger les contrat-types
    this.$repos.contractHeaders
      .index()
      .then((data) => commit('setContractHeader', data))
  },
  getPartnerHeaders({ commit }) {
    // charger les formes juridiques
    this.$repos.partnerHeaders
      .index()
      .then((data) => commit('setPartnerHeaders', data))
  },
  getProductHeaders({ commit }) {
    // charger les formes juridiques
    this.$repos.productHeaders
      .index()
      .then((data) => commit('setProductHeaders', data))
  },
  getOfferHeaders({ commit }) {
    // charger les structures
    this.$repos.offerHeaders
      .index()
      .then((data) => commit('setOfferHeaders', data))
  },
  getOrderHeaders({ commit }) {
    // charger les structures
    this.$repos.orderHeaders
      .index()
      .then((data) => commit('setOrderHeaders', data))
  },
  getOrderLineHeaders({ commit }) {
    // charger les structures
    this.$repos.orderLineHeaders
      .index()
      .then((data) => commit('setOrderLineHeaders', data))
  }
}
