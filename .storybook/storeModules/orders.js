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
          status: "pending",
          total: 0
        },
        {
          account_id: 3,
          amount: 1500,
          currency: "EUR",
          id: 1,
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
        },
        {
          account_id: 1,
          amount: 2500,
          currency: "EUR",
          id: 5,
          date: "2020-08-20T00:00:00.000Z",
          order_items: [
            {
              currency: "EUR",
              dimension: null,
              id: 5,
              offer_id: 4,
              order_id: 5,
              params: { },
              price: 100,
              quantity: 25,
              status: "draft",
              unit: null
            }
          ],
          params: { },
          reference: "OPIJJG",
          status: "active",
          total: 0
        },
        {
          account_id: 5,
          amount: 2500,
          currency: "EUR",
          id: 6,
          date: "2020-08-20T00:00:00.000Z",
          order_items: [
            {
              currency: "EUR",
              dimension: null,
              id: 6,
              offer_id: 4,
              order_id: 6,
              params: {
                params: {
                  plop: 15
                }
              },
              price: 100,
              quantity: 25,
              status: "draft",
              unit: "h"
            }
          ],
          params: { },
          reference: "URUOSR",
          status: "pending",
          total: 0
        },
        {
          account_id: 5,
          amount: 2500,
          currency: "EUR",
          id: 7,
          date: "2020-08-20T00:00:00.000Z",
          order_items: [
            {
              currency: "EUR",
              dimension: null,
              id: 7,
              offer_id: 4,
              order_id: 7,
              params: {
                params: {
                  plop: 15
                }
              },
              price: 100,
              quantity: 25,
              status: "draft",
              unit: "h"
            }
          ],
          params: { },
          reference: "EQEGXE",
          status: "pending",
          total: 0
        },
        {
          account_id: 5,
          amount: 2500,
          currency: "EUR",
          id: 8,
          date: "2020-08-20T00:00:00.000Z",
          order_items: [
            {
              currency: "EUR",
              dimension: null,
              id: 8,
              offer_id: 4,
              order_id: 8,
              params: {
                params: {
                  plop: 15
                }
              },
              price: 100,
              quantity: 25,
              status: "draft",
              unit: "h"
            }
          ],
          params: { },
          reference: "LJCTCI",
          status: "pending",
          total: 0
        },
        {
          account_id: 1,
          amount: 100,
          currency: "EUR",
          id: 9,
          date: "2020-08-20T00:00:00.000Z",
          order_items: [
            {
              currency: "EUR",
              dimension: "duration",
              id: 9,
              offer_id: 8,
              order_id: 9,
              params: {
                params: {
                  iso_9000: false
                }
              },
              price: 50,
              quantity: 2,
              status: "draft",
              unit: "hr"
            }
          ],
          params: { },
          reference: "VSCAMT",
          status: "pending",
          total: 0
        },
        {
          account_id: 1,
          amount: 37.5,
          currency: "EUR",
          id: 10,
          date: "2020-08-20T00:00:00.000Z",
          order_items: [
            {
              currency: "EUR",
              dimension: "number",
              id: 10,
              offer_id: 9,
              order_id: 10,
              params: { },
              price: 3.75,
              quantity: 10,
              status: "draft",
              unit: "Nr"
            }
          ],
          params: { },
          reference: "VKPAEP",
          status: "pending",
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
