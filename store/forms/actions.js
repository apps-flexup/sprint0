// Action de base
export default {
  getContract({ commit }) {
    // charger les contrat-types
    this.$repos.contractSteps
      .index()
      .then((data) => commit('setContractSteps', data))
  },
  getContact({ commit }) {
    this.$repos.contactSteps
      .index()
      .then((data) => commit('setContactSteps', data))
  },
  getProduct({ commit }) {
    this.$repos.productSteps
      .index()
      .then((data) => commit('setProductSteps', data))
  },
  getOffer({ commit }) {
    this.$repos.offerSteps.index().then((data) => commit('setOfferSteps', data))
  },
  getThirdPartyAccount({ commit }) {
    this.$repos.thirdPartyAccountSteps
      .index()
      .then((data) => commit('setThirdPartyAccountSteps', data))
  },
  getPaymentCondition({ commit }) {
    this.$repos.paymentConditionsSteps
      .index()
      .then((data) => commit('setPaymentConditionSteps', data))
  },
  getPaymentStructure({ commit }) {
    this.$repos.paymentStructureSteps
      .index()
      .then((data) => commit('setPaymentStructureSteps', data))
  }
}
