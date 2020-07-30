import getters from '@/store/products/getters'
import mutations from '@/store/products/mutations'
import state from '@/store/products/state'

const moduleProducts = {
  namespaced: true,
  actions: {
    get({ commit }) {
      // charger les formes juridiques
      const data = [
        {
          account_id: 1,
          category_id: 55,
          currency: "EUR",
          dimension: "duration",
          name: "Appartement Paris 8",
          price: "1250",
          quantity: 1,
          status: "active",
          unit: "month",
          id: 1
        },
        {
          account_id: 1,
          category_id: 55,
          currency: "EUR",
          dimension: "duration",
          name: "Appartement Paris 19",
          price: "300",
          quantity: 1,
          status: "inactive",
          unit: "month",
          id: 2
        },
        {
          category_id: 22,
          name: "Bananes",
          unit: "Gb/s",
          dimension: "bandwith",
          status: "draft",
          account_id: 1,
          id: 15
        }
      ]
      commit('set', data)
    }
  },
  getters: getters,
  mutations: mutations,
  state: state
}
export default moduleProducts
