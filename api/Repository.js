export default ($axios) => (resource) => ({
  async index() {
    const res = await $axios.$get(`/${resource}`)
    return res
  },
  show(id) {
    return $axios.$get(`/${resource}/${id}`)
  },
  create(payload) {
    delete payload.id
    return $axios.$post(`/${resource}`, payload)
  },
  update(payload) {
    const id = parseInt(payload.id)
    // on supprime: id, created_at et updated_at
    delete payload.id
    delete payload.created_at
    delete payload.updated_at
    return $axios.$put(`/${resource}/${id}`, payload)
  },
  delete(id) {
    return $axios.$delete(`/${resource}/${id}`)
  }
})
