export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  types(state) {
    if (!state.typeContrat) return []
    const res = JSON.parse(JSON.stringify(state.typeContrat))
    return res
  },
  structures(state) {
    if (!state.structures) return []
    const res = JSON.parse(JSON.stringify(state.structures))
    return res
  },
  formesJuridiques(state) {
    const res = state.formesJuridiques
    return res
  }
}
