import getters from '@/store/offers/getters'
import mutations from '@/store/offers/mutations'
import state from '@/store/offers/state'

const moduleOffers = {
  namespaced: true,
  actions: {
    getAll({ commit }) {
      const data = [
        {
          account_id: 5,
          active: true,
          category: {
            active: true,
            allow_at_client: true,
            allow_at_supplier: true,
            allow_remote: false,
            allow_shipping: false,
            description: {
              en: "English",
              fr: "French"
            },
            dimension: "duration",
            id: 8,
            name: {
              en: "Baby sitting",
              fr: "Baby sitting"
            },
            offers_count: 2,
            orderable: true,
            other_parent: [ ],
            parent_id: 6,
            sort_order: 1,
            status: "active",
            unit: "hr"
          },
          category_id: 8,
          currency: "EUR",
          description: {
            en: "Your child/children are between 3 and 13 years old, we provide caring services."
          },
          dimension: null,
          elasticity: 0,
          evaluation_avg: 6.5,
          favorite: true,
          id: 5,
          illustration_url: "https://placeimg.com/640/480?id=5",
          name: {
            en: "Baby Sitting"
          },
          offer_at_client: true,
          offer_at_supplier: true,
          offer_remote: true,
          offer_shipping: true,
          params: {
            nbr_enfants: 3
          },
          price: 10,
          reference: "FXBTDE",
          status: "draft",
          unit: "h"
        },
        {
          account_id: 5,
          active: true,
          category: {
            active: true,
            allow_at_client: true,
            allow_at_supplier: true,
            allow_remote: false,
            allow_shipping: false,
            description: {
              en: "English",
              fr: "French"
            },
            dimension: "duration",
            id: 8,
            name: {
              en: "Baby sitting",
              fr: "Baby sitting"
            },
            offers_count: 2,
            orderable: true,
            other_parent: [ ],
            parent_id: 6,
            sort_order: 1,
            status: "inactive",
            unit: "hr"
          },
          category_id: 8,
          currency: "EUR",
          description: {
            en: "this is a category for baby sitting"
          },
          dimension: null,
          elasticity: 20,
          evaluation_avg: 6.5,
          favorite: true,
          id: 6,
          illustration_url: "https://placeimg.com/640/480?id=6",
          name: {
            en: "My nice baby sitter"
          },
          offer_at_client: true,
          offer_at_supplier: true,
          offer_remote: true,
          offer_shipping: true,
          params: {
            nbr_enfants: 5
          },
          price: 12.75,
          reference: "EUXSKQ",
          status: "suspended",
          unit: null
        },
        {
          account_id: 5,
          active: true,
          category: {
            active: true,
            allow_at_client: true,
            allow_at_supplier: true,
            allow_remote: false,
            allow_shipping: false,
            description: {
              en: "English",
              fr: "French"
            },
            dimension: "duration",
            id: 9,
            name: {
              en: "Babysitting for babies",
              fr: "Babysitter pour les bébés"
            },
            offers_count: 1,
            orderable: true,
            other_parent: [ ],
            parent_id: 8,
            sort_order: 0,
            status: "active",
            unit: "hr"
          },
          category_id: 9,
          currency: "EUR",
          description: {
            en: "description of offer 187 service actuellement !!!!"
          },
          dimension: "duration",
          elasticity: 50,
          evaluation_avg: 6.5,
          favorite: true,
          id: 7,
          illustration_url: "https://placeimg.com/640/480?id=7",
          name: {
            en: "baby sitter home service"
          },
          offer_at_client: true,
          offer_at_supplier: true,
          offer_remote: true,
          offer_shipping: true,
          params: {
            nbr_enfants: 3
          },
          price: 7.75,
          reference: "WUDCSQ",
          status: "draft",
          unit: "hr"
        },
      ]
      commit('setAll', data)
    },
    get({ commit }) {
      const data = [
        {
          account_id: 5,
          active: true,
          category: {
            active: true,
            allow_at_client: true,
            allow_at_supplier: true,
            allow_remote: false,
            allow_shipping: false,
            description: {
              en: "English",
              fr: "French"
            },
            dimension: "duration",
            id: 8,
            name: {
              en: "Baby sitting",
              fr: "Baby sitting"
            },
            offers_count: 2,
            orderable: true,
            other_parent: [ ],
            parent_id: 6,
            sort_order: 1,
            status: "active",
            unit: "hr"
          },
          category_id: 8,
          currency: "EUR",
          description: {
            en: "Your child/children are between 3 and 13 years old, we provide caring services."
          },
          dimension: null,
          elasticity: 0,
          evaluation_avg: 6.5,
          favorite: true,
          id: 5,
          illustration_url: "https://placeimg.com/640/480?id=5",
          name: {
            en: "Baby Sitting"
          },
          offer_at_client: true,
          offer_at_supplier: true,
          offer_remote: true,
          offer_shipping: true,
          params: {
            nbr_enfants: 3
          },
          price: 10,
          reference: "FXBTDE",
          status: "draft",
          unit: "h"
        },
        {
          account_id: 5,
          active: true,
          category: {
            active: true,
            allow_at_client: true,
            allow_at_supplier: true,
            allow_remote: false,
            allow_shipping: false,
            description: {
              en: "English",
              fr: "French"
            },
            dimension: "duration",
            id: 8,
            name: {
              en: "Baby sitting",
              fr: "Baby sitting"
            },
            offers_count: 2,
            orderable: true,
            other_parent: [ ],
            parent_id: 6,
            sort_order: 1,
            status: "inactive",
            unit: "hr"
          },
          category_id: 8,
          currency: "EUR",
          description: {
            en: "this is a category for baby sitting"
          },
          dimension: null,
          elasticity: 20,
          evaluation_avg: 6.5,
          favorite: true,
          id: 6,
          illustration_url: "https://placeimg.com/640/480?id=6",
          name: {
            en: "My nice baby sitter"
          },
          offer_at_client: true,
          offer_at_supplier: true,
          offer_remote: true,
          offer_shipping: true,
          params: {
            nbr_enfants: 5
          },
          price: 12.75,
          reference: "EUXSKQ",
          status: "suspended",
          unit: null
        },
        {
          account_id: 5,
          active: true,
          category: {
            active: true,
            allow_at_client: true,
            allow_at_supplier: true,
            allow_remote: false,
            allow_shipping: false,
            description: {
              en: "English",
              fr: "French"
            },
            dimension: "duration",
            id: 9,
            name: {
              en: "Babysitting for babies",
              fr: "Babysitter pour les bébés"
            },
            offers_count: 1,
            orderable: true,
            other_parent: [ ],
            parent_id: 8,
            sort_order: 0,
            status: "active",
            unit: "hr"
          },
          category_id: 9,
          currency: "EUR",
          description: {
            en: "description of offer 187 service actuellement !!!!"
          },
          dimension: "duration",
          elasticity: 50,
          evaluation_avg: 6.5,
          favorite: true,
          id: 7,
          illustration_url: "https://placeimg.com/640/480?id=7",
          name: {
            en: "baby sitter home service"
          },
          offer_at_client: true,
          offer_at_supplier: true,
          offer_remote: true,
          offer_shipping: true,
          params: {
            nbr_enfants: 3
          },
          price: 7.75,
          reference: "WUDCSQ",
          status: "draft",
          unit: "hr"
        },
      ]
      commit('set', data)
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
