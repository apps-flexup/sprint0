export default {
  set(state, items) {
    state.items = items
  },
  setBusinessAccountSteps(state, items) {
    state.businessAccounts = items
  },
  setPersonalAccountSteps(state, items) {
    state.personalAccounts = items
  },
  setContractSteps(state, items) {
    state.contracts = items
  },
  setContactSteps(state, items) {
    state.contacts = items
  },
  setProductSteps(state, items) {
    state.products = items
  },
  setOfferSteps(state, items) {
    state.offers = items
  },
  setThirdPartyAccountSteps(state, items) {
    state.thirdPartyAccounts = items
  },
  setPaymentConditionSteps(state, items) {
    state.paymentConditions = items
  },
  setPaymentStructureSteps(state, items) {
    state.paymentStructures = items
  }
}
