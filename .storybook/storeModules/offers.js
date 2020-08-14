import getters from '@/store/offers/getters'
import mutations from '@/store/offers/mutations'
import state from '@/store/offers/state'

const moduleOffers = {
  namespaced: true,
  actions: {
    getAll({ commit }) {
      const data = [
        {
          account_id: 3,
          active: true,
          category: {
            active: true,
            allow_at_client: false,
            allow_at_supplier: true,
            allow_remote: false,
            allow_shipping: true,
            description: {
              en: "Milk",
              fr: "Catégorie Lait"
            },
            dimension: "volume",
            id: 25,
            name: {
              en: "Milk",
              fr: "Lait"
            },
            offers_count: 6,
            orderable: true,
            other_parent: [ ],
            parent_id: 21,
            sort_order: 0,
            status: "active",
            unit: "l"
          },
          category_id: 25,
          currency: "EUR",
          description: {
            en: "True Goat milk",
            fr: "Le vrai lait de chèvre"
          },
          dimension: "volume",
          elasticity: 20,
          evaluation_avg: 6.5,
          favorite: true,
          id: 1,
          illustration_url: "https://placeimg.com/640/480?id=1",
          name: {
            en: "Goat milk",
            fr: "Lait de chêvre"
          },
          offer_at_client: true,
          offer_at_supplier: true,
          offer_remote: true,
          offer_shipping: true,
          params: {
            offerinfo: "goat milk is offered still"
          },
          price: 100,
          reference: "EKWOHX",
          status: "reserved",
          unit: "m³"
        },
        {
          account_id: 5,
          active: true,
          category: {
            active: false,
            allow_at_client: true,
            allow_at_supplier: true,
            allow_remote: false,
            allow_shipping: true,
            description: {
              en: "Services category",
              fr: "Catégorie chapeau pour les services (en français)"
            },
            dimension: "duration",
            id: 2,
            name: {
              en: "Services",
              fr: "Services (en français)"
            },
            offers_count: 1,
            orderable: true,
            other_parent: [ ],
            parent_id: 1,
            sort_order: 0,
            status: "active",
            unit: "day"
          },
          category_id: 2,
          currency: "EUR",
          description: {
            en: "description of offer which is really beuatyful"
          },
          dimension: "duration",
          elasticity: 0,
          evaluation_avg: 6.5,
          favorite: false,
          id: 2,
          illustration_url: "https://placeimg.com/640/480?id=2",
          name: {
            en: "my beautifiul offer"
          },
          offer_at_client: true,
          offer_at_supplier: true,
          offer_remote: true,
          offer_shipping: true,
          params: {
            identifiant_service: {
              fr: "blabla725-924"
            }
          },
          price: 100,
          reference: "LLGVXJ",
          status: "draft",
          unit: "day"
        },
        {
          account_id: 1,
          active: true,
          category: {
            active: true,
            allow_at_client: true,
            allow_at_supplier: true,
            allow_remote: false,
            allow_shipping: true,
            description: {
              en: "English",
              fr: "French"
            },
            dimension: "number",
            id: 44,
            name: {
              en: "Card Games",
              fr: "Jeux de cartes"
            },
            offers_count: 1,
            orderable: true,
            other_parent: [ ],
            parent_id: 43,
            sort_order: 0,
            status: "active",
            unit: "Nr"
          },
          category_id: 44,
          currency: "EUR",
          description: {
            en: "description of offer fab",
            fr: "description of Le jeu des 7 familles"
          },
          dimension: null,
          elasticity: 0,
          evaluation_avg: 6.5,
          favorite: true,
          illustration_url: "https://placeimg.com/640/480?id=3",
          name: {
            en: "7 familly game",
            fr: "Le jeu des 7 familles"
          },
          offer_at_client: true,
          offer_at_supplier: true,
          offer_remote: true,
          offer_shipping: true,
          params: {
            game_name: {
              en: "Tintin version",
              fr: "version Tintin"
            },
            quantity_of_cards: 52
          },
          price: 10,
          reference: "BAVAFC",
          status: "active",
          unit: "h",
          vat: "20.5",
          id: 3
        },
        {
          account_id: 1,
          active: true,
          category: {
            active: true,
            allow_at_client: false,
            allow_at_supplier: false,
            allow_remote: false,
            allow_shipping: false,
            description: {
              en: "English",
              fr: "French"
            },
            dimension: null,
            id: 52,
            name: {
              en: "Development",
              fr: "Développement"
            },
            offers_count: 1,
            orderable: true,
            other_parent: [ ],
            parent_id: 51,
            sort_order: 0,
            status: "suspended",
            unit: null
          },
          category_id: 52,
          currency: "EUR",
          description: {
            en: "description of offer php"
          },
          dimension: null,
          elasticity: 20,
          evaluation_avg: 6.5,
          favorite: true,
          illustration_url: "https://placeimg.com/640/480?id=4",
          name: {
            en: "name of offer php"
          },
          offer_at_client: true,
          offer_at_supplier: true,
          offer_remote: true,
          offer_shipping: true,
          params: {
            condition: {
              en: "default conditionvg"
            },
            plop: 2525
          },
          price: 100,
          reference: "EICMNB",
          status: "archived",
          unit: "h",
          vat: "12",
          id: 4
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
        {
          account_id: 10,
          currency: 49,
          dimension: "dimension",
          elasticity: "1",
          id: 10,
          name: "Minute",
          price: "150",
          product_id: 5,
          status: "draft"
        },
        {
          account_id: 10,
          dimension: "dimension",
          id: 11,
          name: "test",
          product_id: 6,
          status: "draft"
        },
        {
          account_id: 10,
          currency: 49,
          dimension: "dimension",
          id: 12,
          name: "test",
          product_id: 7,
          status: "draft"
        },
        {
          account_id: -1,
          dimension: "dimension",
          id: 13,
          name: "test",
          product_id: 8,
          status: "draft"
        },
        {
          currency: "AUD",
          dimension: "weight",
          name: "un truc du genre des pommes",
          price: "2.5",
          status: "inactive",
          unit: "kg",
          product_id: 12,
          account_id: 3,
          id: 17
        },
        {
          currency: "EUR",
          dimension: "duration",
          name: "Appt ",
          price: "1752",
          status: "draft",
          unit: "month",
          product_id: 13,
          account_id: 13,
          id: 18
        },
        {
          currency: "EUR",
          dimension: "weight",
          name: "Cerises",
          price: "4.98",
          status: "draft",
          unit: "kg",
          product_id: 14,
          account_id: 13,
          id: 19
        },
        {
          product_id: 15,
          name: "Appartement Paris 19",
          price: "123",
          unit: "month",
          dimension: "duration",
          status: "draft",
          account_id: 1,
          category_id: 22,
          productId: 2,
          currency: "EUR",
          vat: "20",
          id: 20
        },
        {
          product_id: 15,
          name: "Bananes",
          price: "123",
          currency: "USD",
          unit: "Gb/s",
          dimension: "bandwith",
          status: "draft",
          account_id: 1,
          vat: "12",
          id: 21
        }
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
