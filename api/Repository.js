export default ($axios) => (resource) => ({
  async index() {
    console.log()
    const res = await $axios.$get(`/${resource}`)
    return res
  },
  async show(id) {
    const res = await $axios.$get(`/${resource}/${id}`)
    return res
  },
  async create(payload) {
    delete payload.id
    const res = await $axios.$post(`/${resource}`, payload)
    return res
  },
  async update(payload) {
    const id = parseInt(payload.id)
    // on supprime: id, created_at et updated_at
    delete payload.id
    delete payload.created_at
    delete payload.updated_at
    const res = await $axios.$put(`/${resource}/${id}`, payload)
    return res
  },
  async delete(id) {
    const res = await $axios.$delete(`/${resource}/${id}`)
    return res
  }
})
