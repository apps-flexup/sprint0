import getters from '@/store/headers/getters'
import mutations from '@/store/headers/mutations'
import state from '@/store/headers/state'

const moduleHeaders = {
  namespaced: true,
  actions: {
    getProductHeaders({ commit }) {
      // charger les formes juridiques
      const data = [
        {
          align: "start",
          sortable: true,
          text: "headers.products.name",
          value: "name"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.products.category",
          value: "category"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.products.status",
          value: "status"
        }
      ]
      commit('setProductHeaders', data)
    },
    getPartnerHeaders({ commit }) {
      // charger les formes juridiques
      const data = [
        {
          align: "start",
          sortable: true,
          text: "headers.partners.name",
          value: "name"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.partners.siret",
          value: "siret"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.partners.legalStructure",
          value: "legal_structure"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.partners.address",
          value: "address"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.partners.zip",
          value: "zip"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.partners.city",
          value: "city"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.partners.country",
          value: "country"
        }
      ]
      commit('setPartnerHeaders', data)
    }
  },
  getters: getters,
  mutations: mutations,
  state: state
}
export default moduleHeaders
