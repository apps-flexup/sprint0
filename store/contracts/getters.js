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
  getTypes: (state) => (idAccount) => {
    const id = parseInt(idAccount)
    if (!state.items) return []
    console.log('id :', id)
    const res = JSON.parse(JSON.stringify(state.typeContrat))
    return res
  },
  structures(state) {
    if (!state.structures) return []
    const res = JSON.parse(JSON.stringify(state.structures))
    return res
  },
  formesJuridiques(state) {
    const res = JSON.parse(JSON.stringify(state.formesJuridiques))
    return res
  },
  formesJuridiquesById: (state) => (formesJuridiquesId) => {
    if (!state.formesJuridiques) return []
    const id = parseInt(formesJuridiquesId)
    console.log('id :', id)
    const res = state.formesJuridiques.find((v) => v.id === id)
    console.log('store res: ', res)
    return res
  }
}
