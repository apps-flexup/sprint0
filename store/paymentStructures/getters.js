export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    res.forEach((paymentStructure) => {
      paymentStructure.nbPortions = paymentStructure.paymentConditions.length
    })
    return res
  },
  findById: (state) => (structureId) => {
    if (!state.items) return null
    const id = parseInt(structureId)
    const res = state.items.find((v) => parseInt(v.id) === id)
    return res
  },
  getDetailsById: (state, _getters, _rootStates, rootGetters) => (
    structureId
  ) => {
    if (!state.items) return null
    const id = parseInt(structureId)
    const structure = state.items.find((v) => parseInt(v.id) === id)
    if (!structure) return null
    for (let i = 0; i < structure.paymentConditions.length; i++) {
      const tmp = structure.paymentConditions[i]
      const paymentCondition = rootGetters['paymentConditions/findById'](tmp.id)
      structure.paymentConditions[i] = paymentCondition
    }
    return structure
  }
}
