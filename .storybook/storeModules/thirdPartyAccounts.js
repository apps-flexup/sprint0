import getters from '~/store/thirdPartyAccounts/getters'
import mutations from '~/store/thirdPartyAccounts/mutations'
import state from '~/store/thirdPartyAccounts/state'

const moduleThirdPartyAccounts = {
  namespaced: true,
  actions: {
    get({ commit }) {
      const data = [
        {
          account_id: 1,
          address: "12 rue de la poupée qui tousse",
          avatar: "/images/avatar-0.png",
          city: "Braniole de turbeuse",
          country_id: 157,
          name: "plop",
          zip: "15774",
          legal_structure_id: 13,
          country: {
            active: true,
            continent: null,
            continent_id: null,
            currencies: [
              {
                active: true,
                id: 49,
                iso3: "EUR",
                ison: 978,
                minor: 2,
                name: "Euro"
              }
            ],
            id: 157,
            iso2: "NL",
            iso3: "NLD",
            ison: 528,
            languages: [
              {
                active: false,
                id: 114,
                iso2: "nl",
                name: null,
                native: null
              }
            ],
            name: "Netherlands (the)",
            sovereignty: {
              countries_count: 193,
              description: "UN member state",
              id: 13,
              name: "UN"
            },
            sovereignty_id: 13
          },
          legalStructure: {
            id: 13,
            name: "Société par actions simplifiée unipersonnelle",
            sigle: "SASU"
          },
          siret: "1231231312",
          id: 1
        },
        {
          account_id: 1,
          address: "25 rue de tata janine 12 etage porte gauche",
          city: "Choublon les croigneuses",
          country_id: 77,
          name: "plip",
          zip: "98760103",
          legal_structure_id: 6,
          id: 6
        },
        {
          name: "ABC",
          address: "10 rue ABC",
          zip: "75001",
          city: "Paris",
          country_id: 77,
          legal_structure_id: 2,
          account_id: 1,
          id: 11
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
export default moduleThirdPartyAccounts
