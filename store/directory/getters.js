export default {
  naturalPersons: (_state, _getters, _rootStates, rootGetters) => {
    const res = rootGetters['accounts/personalAccounts']
    return res
  },
  all: (_state, _getters, _rootStates, rootGetters) => {
    const res = rootGetters['accounts/allAccounts']
    return res
  }
}
