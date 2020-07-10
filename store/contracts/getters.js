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
  legalStructures(state) {
    const res = JSON.parse(JSON.stringify(state.legalStructure))
    return res
  },
  getLegalStructureById: (state) => (legalStructureId) => {
    if (!state.legalStructure) return null
    const id = parseInt(legalStructureId)
    const res = state.legalStructure.find((v) => parseInt(v.id) === id)
    return res
  }
}
