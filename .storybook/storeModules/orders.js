import getters from '@/store/offers/getters'
import mutations from '@/store/offers/mutations'
import state from '@/store/offers/state'

const moduleOffers = {
  namespaced: true,
  actions: {
    get({ commit }) {
      const data = [
        {
          account_id: 1,
          amount: 2500,
          currency: "EUR",
          id: 2,
          label: "lait de chèvre",
          date: "2020-08-20T00:00:00.000Z",
          order_items: [
            {
              currency: "EUR",
              dimension: "duration",
              id: 2,
              offer_id: 2,
              order_id: 2,
              params: { },
              price: 100,
              quantity: 25,
              status: "draft",
              unit: "day"
            }
          ],
          params: { },
          reference: "MRBQCH",
          status: "draft",
          total: 0
        },
        {
          account_id: 3,
          amount: 1500,
          currency: "EUR",
          id: 1,
          label: "glace à la menthe",
          date: "2020-09-10T00:00:00.000Z",
          order_items: [
            {
              currency: "EUR",
              dimension: "volume",
              id: 1,
              offer_id: 1,
              order_id: 1,
              params: {
                params: {
                  orderinfo: "I want with strawberry flavour"
                }
              },
              price: 100,
              quantity: 15,
              status: "draft",
              unit: "m³"
            }
          ],
          params: { },
          reference: "JQAJAG",
          status: "suspended",
          total: 0
        },
        {
          account_id: 6,
          amount: 150,
          currency: "EUR",
          id: 3,
          label: "bouée gonflable",
          date: "2020-12-09T00:00:00.000Z",
          order_items: [
            {
              currency: "EUR",
              dimension: null,
              id: 3,
              offer_id: 3,
              order_id: 3,
              params: { },
              price: 10,
              quantity: 15,
              status: "draft",
              unit: null
            }
          ],
          params: { },
          reference: "UEKBIJ",
          status: "inactive",
          total: 0
        },
        {
          account_id: 1,
          amount: 1200,
          currency: "EUR",
          id: 4,
          label: "peinture noir mat",
          date: "2020-08-20T00:00:00.000Z",
          order_items: [
            {
              currency: "EUR",
              dimension: "volume",
              id: 4,
              offer_id: 1,
              order_id: 4,
              params: {
                params: {
                  orderinfo: "order info 2"
                }
              },
              price: 100,
              quantity: 12,
              status: "draft",
              unit: "m³"
            }
          ],
          params: { },
          reference: "DGFHPM",
          status: "active",
          total: 0
        }
      ]
      commit('set', data)
    },
    add({ commit }, order) {
      console.log('Order to add: ', order)
    },
    clear({ commit }) {
      commit('clear')
    }
  },
  getters: getters,
  mutations: mutations,
  state: state
}
export default moduleOffers
