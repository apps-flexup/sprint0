import getters from '@/store/categories/getters'
import mutations from '@/store/categories/mutations'
import state from '@/store/categories/state'

const moduleCategories = {
  namespaced: true,
  actions: {
    get({ commit }) {
      const data = [
          {
            "active": true,
            "allow_at_client": true,
            "allow_at_supplier": true,
            "allow_remote": false,
            "allow_shipping": true,
            "description": {
              "en": "This is the root of the cateogory tree. Offers cannot be posted here.",
              "fr": "Ceci est la racine de l'arborescence des catégories. Il n'est pas possible de publier des offres dans cette catégorie.",
              "it": "Questa è la radice dell'albero delle categorie."
            },
            "dimension": null,
            "id": 1,
            "name": {
              "en": "All (root)",
              "fr": "Tous (catégorie racine)",
              "it": "Tutti (radice)"
            },
            "offers_count": 0,
            "orderable": false,
            "other_parent": [],
            "parent_id": null,
            "sort_order": 0,
            "status": "active",
            "unit": null
          },
          {
            "active": false,
            "allow_at_client": true,
            "allow_at_supplier": true,
            "allow_remote": false,
            "allow_shipping": true,
            "description": {
              "en": "Services category",
              "fr": "Catégorie chapeau pour les services (en français)"
            },
            "dimension": "duration",
            "id": 2,
            "name": {
              "en": "Services",
              "fr": "Services (en français)"
            },
            "offers_count": 1,
            "orderable": true,
            "other_parent": [],
            "parent_id": 1,
            "sort_order": 0,
            "status": "active",
            "unit": "day"
          },
          {
            "active": true,
            "allow_at_client": true,
            "allow_at_supplier": false,
            "allow_remote": false,
            "allow_shipping": true,
            "description": {
              "en": "English",
              "fr": "French"
            },
            "dimension": "duration",
            "id": 3,
            "name": {
              "en": "Building work",
              "fr": "Travaux Bâtiment"
            },
            "offers_count": 1,
            "orderable": true,
            "other_parent": [],
            "parent_id": 2,
            "sort_order": 0,
            "status": "active",
            "unit": "hr"
          },
          {
            "active": true,
            "allow_at_client": true,
            "allow_at_supplier": true,
            "allow_remote": false,
            "allow_shipping": true,
            "description": {
              "en": "English",
              "fr": "French"
            },
            "dimension": null,
            "id": 4,
            "name": {
              "en": "Plumbing",
              "fr": "Plomberie"
            },
            "offers_count": 0,
            "orderable": true,
            "other_parent": [],
            "parent_id": 3,
            "sort_order": 0,
            "status": "active",
            "unit": null
          },
          {
            "active": false,
            "allow_at_client": true,
            "allow_at_supplier": true,
            "allow_remote": false,
            "allow_shipping": true,
            "description": {
              "en": "English",
              "fr": "French"
            },
            "dimension": null,
            "id": 5,
            "name": {
              "en": "Locksmith",
              "fr": "Serrurerie"
            },
            "offers_count": 0,
            "orderable": true,
            "other_parent": [],
            "parent_id": 3,
            "sort_order": 5,
            "status": "active",
            "unit": null
          },
          {
            "active": true,
            "allow_at_client": true,
            "allow_at_supplier": false,
            "allow_remote": false,
            "allow_shipping": false,
            "description": {
              "en": "English",
              "fr": "French"
            },
            "dimension": "duration",
            "id": 6,
            "name": {
              "en": "Home Services",
              "fr": "Services à domiciles"
            },
            "offers_count": 0,
            "orderable": true,
            "other_parent": [],
            "parent_id": 2,
            "sort_order": 3,
            "status": "active",
            "unit": "hr"
          }
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
export default moduleCategories
