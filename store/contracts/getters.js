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
    // const src = {}
    console.log('id :', id)
    const res = JSON.parse(JSON.stringify(state.typeContrat))
    // const res = arr.reduce((acc, v) => {
    //   // Exclusion
    //   if (!v.id_account ^ (v.id_account === id)) {
    //     const payload = {
    //       name: v.name,
    //       categories: v.categories
    //     }
    //     console.log('acc', acc)
    //     console.log('plop', payload)
    //     // if (!hasOwnProperty(v.name)) {
    //     //   acc[v.name] = payload
    //     // } else {
    //     //   payload.categories =
    //     //     [...new Set([...payload.categories, ...v.categories])]
    //     // }
    //     acc[v.name] = payload
    //   }
    // }, src)
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
  }
}
