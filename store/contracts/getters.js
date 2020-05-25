export default {
  types(state) {
    if (!state.typeContrat) return []
    const res = JSON.parse(JSON.stringify(state.typeContrat))
    return res
  }
}
