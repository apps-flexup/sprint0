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
    },
    getOfferHeaders({ commit }) {
      const data = [
        {
          align: "start",
          sortable: true,
          text: "headers.offers.name",
          value: "name"
        },
        {
          align: "end",
          sortable: true,
          text: "headers.offers.price",
          value: "price"
        },
        {
          align: "end",
          sortable: true,
          text: "headers.offers.currency",
          value: "currency"
        },
        {
          align: "end",
          sortable: true,
          text: "headers.offers.vat",
          value: "vat"
        },
        {
          align: "center",
          sortable: true,
          text: "headers.offers.unit",
          value: "unit"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.offers.status",
          value: "status"
        }
      ]
      commit('setOfferHeaders', data)
    },
    getOrderHeaders({ commit }) {
      const data = [
        {
          align: "start",
          sortable: true,
          text: "headers.orders.date",
          value: "date"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.orders.amount",
          value: "amount"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.orders.currency",
          value: "currency"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.orders.label",
          value: "label"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.orders.structure",
          value: "structure"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.orders.status",
          value: "status"
        }
      ]
      commit('setOrderHeaders', data)
    },
    getOrderLineHeaders({ commit }) {
      const data = [
        {
          align: "start",
          sortable: true,
          text: "headers.orderLines.offer",
          value: "offer"
        },
        {
          align: "end",
          sortable: true,
          text: "headers.orderLines.quantity",
          value: "quantity"
        },
        {
          align: "end",
          sortable: true,
          text: "headers.orderLines.price",
          value: "price"
        },
        {
          align: "end",
          sortable: true,
          text: "headers.orderLines.total",
          value: "total"
        },
        {
          align: "end",
          sortable: true,
          text: "headers.orderLines.vat",
          value: "vat"
        },
        {
          align: "start",
          sortable: true,
          text: "headers.orderLines.status",
          value: "status"
        }
      ]
      commit('setOrderLineHeaders', data)
    }
  },
  getters: getters,
  mutations: mutations,
  state: state
}
export default moduleHeaders
