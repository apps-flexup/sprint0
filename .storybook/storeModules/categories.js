import getters from '@/store/categories/getters'
import mutations from '@/store/categories/mutations'
import state from '@/store/categories/state'

const moduleCategories = {
  namespaced: true,
  actions: {
    get({ commit }) {
      const data = [
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "This is the root of the cateogory tree. Offers cannot be posted here.",
            fr: "Ceci est la racine de l'arborescence des catégories. Il n'est pas possible de publier des offres dans cette catégorie.",
            it: "Questa è la radice dell'albero delle categorie."
          },
          dimension: null,
          id: 1,
          name: {
            en: "All (root)",
            fr: "Tous (catégorie racine)",
            it: "Tutti (radice)"
          },
          offers_count: 0,
          orderable: false,
          other_parent: [ ],
          parent_id: null,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
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
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: false,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: "duration",
          id: 3,
          name: {
            en: "Building work",
            fr: "Travaux Bâtiment"
          },
          offers_count: 1,
          orderable: true,
          other_parent: [ ],
          parent_id: 2,
          sort_order: 0,
          status: "active",
          unit: "hr"
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 4,
          name: {
            en: "Plumbing",
            fr: "Plomberie"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 3,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
          active: false,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 5,
          name: {
            en: "Locksmith",
            fr: "Serrurerie"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 3,
          sort_order: 5,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: false,
          allow_remote: false,
          allow_shipping: false,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: "duration",
          id: 6,
          name: {
            en: "Home Services",
            fr: "Services à domiciles"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 2,
          sort_order: 3,
          status: "active",
          unit: "hr"
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 7,
          name: {
            en: "Household",
            fr: "Ménage"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 6,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
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
          offers_count: 3,
          orderable: true,
          other_parent: [ ],
          parent_id: 6,
          sort_order: 1,
          status: "active",
          unit: "hr"
        },
        {
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
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 10,
          name: {
            en: "Personal services",
            fr: "Services à la personne"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 2,
          sort_order: 2,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: false,
          allow_at_supplier: false,
          allow_remote: true,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: "duration",
          id: 11,
          name: {
            en: "Sick guard",
            fr: "Garde malades"
          },
          offers_count: 1,
          orderable: true,
          other_parent: [ ],
          parent_id: 10,
          sort_order: 0,
          status: "active",
          unit: "hr"
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 12,
          name: {
            en: "grocery shopping",
            fr: "Courses"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 10,
          sort_order: 1,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 13,
          name: {
            en: "Painting",
            fr: "Peinture"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 3,
          sort_order: 4,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: "unit",
          id: 14,
          name: {
            en: "Glaziery",
            fr: "Vitrerie"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 3,
          sort_order: 3,
          status: "active",
          unit: "Unit"
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 15,
          name: {
            en: "Restoration",
            fr: "Restauration"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 14,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 16,
          name: {
            en: "Pose",
            fr: "Pose"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 14,
          sort_order: 2,
          status: "active",
          unit: null
        },
        {
          active: false,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 17,
          name: {
            en: "Removal",
            fr: "Dépose"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 14,
          sort_order: 1,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 18,
          name: {
            en: "Opening doors",
            fr: "Ouverture de portes"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 5,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
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
          id: 19,
          name: {
            en: "Products",
            fr: "Produits"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 1,
          sort_order: 1,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 20,
          name: {
            en: "Food",
            fr: "Alimentaires"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 19,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
          active: false,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 21,
          name: {
            en: "Dairy products",
            fr: "Crèmerie"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 20,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 22,
          name: {
            en: "Creamery",
            fr: "Fruits & Légumes"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 21,
          sort_order: 2,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 23,
          name: {
            en: "Grocery",
            fr: "Epicerie"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 20,
          sort_order: 3,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 24,
          name: {
            en: "Butchery",
            fr: "Boucherie"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 20,
          sort_order: 2,
          status: "active",
          unit: null
        },
        {
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
        {
          active: true,
          allow_at_client: false,
          allow_at_supplier: false,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: "number",
          id: 26,
          name: {
            en: "Cheese",
            fr: "Fromage"
          },
          offers_count: 1,
          orderable: true,
          other_parent: [ ],
          parent_id: 21,
          sort_order: 1,
          status: "active",
          unit: "Nr"
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: false,
          allow_remote: false,
          allow_shipping: false,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: "length",
          id: 38,
          name: {
            en: "Electricity",
            fr: "Electricité"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 3,
          sort_order: 2,
          status: "active",
          unit: "m"
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: false,
          allow_remote: false,
          allow_shipping: false,
          description: {
            en: "English Masonry",
            fr: "French"
          },
          dimension: "volume",
          id: 39,
          name: {
            en: "Masonry",
            fr: "Maçonnerie"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 3,
          sort_order: 1,
          status: "active",
          unit: "m³"
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 40,
          name: {
            en: "Floor tile",
            fr: "Carrelage"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 39,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
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
          id: 41,
          name: {
            en: "Cultural",
            fr: "Culture"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 19,
          sort_order: 1,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 42,
          name: {
            en: "Games toys",
            fr: "Jeux & Jouets"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 41,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 43,
          name: {
            en: "Board Games",
            fr: "Jeux de société"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 42,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
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
        {
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
          id: 50,
          name: {
            en: "Business services",
            fr: "Services aux entreprises"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 2,
          sort_order: 1,
          status: "active",
          unit: null
        },
        {
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
          id: 51,
          name: {
            en: "IT",
            fr: "Informatique"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 50,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
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
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 53,
          name: {
            en: "Farm products",
            fr: "Produits de la ferme"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 20,
          sort_order: 1,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: true,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: true,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: null,
          id: 54,
          name: {
            en: "Weekly basket",
            fr: "Panier hebdomadaire"
          },
          offers_count: 0,
          orderable: true,
          other_parent: [ ],
          parent_id: 53,
          sort_order: 0,
          status: "active",
          unit: null
        },
        {
          active: true,
          allow_at_client: false,
          allow_at_supplier: true,
          allow_remote: false,
          allow_shipping: false,
          description: {
            en: "English",
            fr: "French"
          },
          dimension: "duration",
          id: 55,
          name: {
            en: "Flat rental",
            fr: "Location appartement"
          },
          offers_count: 1,
          orderable: true,
          other_parent: [ ],
          parent_id: 2,
          sort_order: 0,
          status: "active",
          unit: null
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
