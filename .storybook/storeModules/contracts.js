import getters from '@/store/contracts/getters'
import mutations from '@/store/contracts/mutations'
import state from '@/store/contracts/state'

const moduleContracts = {
  namespaced: true,
  actions: {
    getLegalStructures({ commit }) {
      const data = [
        {
          id: 1,
          name: "Auto-entrepreneur",
          sigle: "AE"
        },
        {
          id: 2,
          name: "Entreprise agricole à responsabilité limitée",
          sigle: "EARL"
        },
        {
          id: 3,
          name: "Entreprise individuelle",
          sigle: "EI"
        },
        {
          id: 4,
          name: "Entreprise individuelle à responsabilité limitée",
          sigle: "EIRL"
        },
        {
          id: 5,
          name: "Entreprise unipersonnelle à responsabilité limitée",
          sigle: "EURL"
        },
        {
          id: 6,
          name: "Groupement agricole d’exploitation en commun",
          sigle: "GAEC"
        },
        {
          id: 7,
          name: "Groupement européen d’intérêt économique",
          sigle: "GEIE"
        },
        {
          id: 8,
          name: "Groupement d’intérêt économique",
          sigle: "GIE"
        },
        {
          id: 9,
          name: "Micro-entrepreneur",
          sigle: "ME"
        },
        {
          id: 10,
          name: "Société à responsabilité limitée",
          sigle: "SARL"
        },
        {
          id: 11,
          name: "Société anonyme",
          sigle: "SA"
        },
        {
          id: 12,
          name: "Société par actions simplifiée",
          sigle: "SAS"
        },
        {
          id: 13,
          name: "Société par actions simplifiée unipersonnelle",
          sigle: "SASU"
        },
        {
          id: 14,
          name: "Société civile",
          sigle: "SC"
        },
        {
          id: 15,
          name: "Société en commandite par actions",
          sigle: "SCA"
        },
        {
          id: 16,
          name: "Société civile immobilière",
          sigle: "SCI"
        },
        {
          id: 17,
          name: "Société coopérative d’intérêt collectif",
          sigle: "SCIC"
        },
        {
          id: 18,
          name: "Société civile immobilière à capital variable",
          sigle: "SCICV"
        },
        {
          id: 19,
          name: "Société civile de moyens",
          sigle: "SCM"
        },
        {
          id: 20,
          name: "Société coopérative ouvrière de production",
          sigle: "SCOP"
        },
        {
          id: 21,
          name: "Société civile professionnelle",
          sigle: "SCP"
        },
        {
          id: 22,
          name: "Société en commandite simple",
          sigle: "SCS"
        },
        {
          id: 23,
          name: "Société d’exercice libéral",
          sigle: "SEL"
        },
        {
          id: 24,
          name: "Société d’exercice libéral à forme anonyme",
          sigle: "SELAFA"
        },
        {
          id: 25,
          name: "Société d’exercice libéral à responsabilité limitée",
          sigle: "SELARL"
        },
        {
          id: 26,
          name: "Société d’exercice libéral par actions simplifiée",
          sigle: "SELAS"
        },
        {
          id: 27,
          name: "Société d’exercice libéral en commandite par actions",
          sigle: "SELCA"
        },
        {
          id: 28,
          name: "Société d’économie mixte",
          sigle: "SEM"
        },
        {
          id: 29,
          name: "Société d’économie mixte locale",
          sigle: "SEML"
        },
        {
          id: 30,
          name: "Société en participation",
          sigle: "SEP"
        },
        {
          id: 31,
          name: "Société d’intérêt collectif agricole",
          sigle: "SICA"
        },
        {
          id: 32,
          name: "Société micro-holding familiale",
          sigle: "SMHF"
        },
        {
          id: 33,
          name: "Société en nom collectif ",
          sigle: "SNC"
        },
        {
          id: 34,
          name: "Société de participations financières de professions libérales",
          sigle: "SPFPL"
        },
        {
          id: 35,
          name: "Societas unius personae (société européenne unipersonnelle à responsabilité limitée)",
          sigle: "SUP"
        }
      ]
      commit('setLegalStructures', data)
    },
    getStructures({ commit }) {
      const data = [
        {
          id: 1,
          name: "Base 40% + Equity 60%",
          schema: [
            {
              name: "base",
              value: 0.4
            },
            {
              name: "Equity",
              value: 0.6
            }
          ]
        },
        {
          id: 2,
          name: "Base 30% + Equity 70%",
          schema: [
            {
              name: "base",
              value: 0.3
            },
            {
              name: "Equity",
              value: 0.7
            }
          ]
        },
        {
          id: 3,
          name: "Base 60% + Equity 40%",
          schema: [
            {
              name: "base",
              value: 0.6
            },
            {
              name: "Equity",
              value: 0.4
            }
          ]
        },
        {
          id: 4,
          name: "Base 50% + Equity 50%",
          schema: [
            {
              name: "base",
              value: 0.5
            },
            {
              name: "Equity",
              value: 0.5
            }
          ]
        }
      ]
      commit('setStructures', data)
    },
    clear({ commit }) {
      commit('clear')
    }
  },
  getters: getters,
  mutations: mutations,
  state: state
}
export default moduleContracts
