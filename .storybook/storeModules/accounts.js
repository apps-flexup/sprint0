import getters from '@/store/accounts/getters'
import mutations from '@/store/accounts/mutations'
import state from '@/store/accounts/state'
import activeAccount from '@/.storybook/activeAccount'

const moduleAccounts = {
  namespaced: true,
  actions: {
    get({ commit }) {
      const data = [
          {
            "avatar": "/images/avatar-0.png",
            "country_id": 77,
            "id": 1,
            "name": "fred",
            "offers_count": 0,
            "params": {},
            "parent_id": null,
            "roles": [
              "customer",
              "supplier"
            ],
            "roles_methods": null,
            "supplier": false,
            "user_id": "2ae5fcf8-9ed5-480a-89c8-a2f946e72140",
            "currency": "EUR"
          },
          {
            "avatar": "/images/avatar-1.png",
            "country_id": 77,
            "id": 2,
            "name": "fabrizio",
            "offers_count": 7,
            "params": {},
            "parent_id": null,
            "roles": [
              "customer"
            ],
            "roles_methods": null,
            "supplier": false,
            "user_id": "bcecf237-eec9-43c2-b881-2242c554485f",
            "currency": "EUR"
          },
          {
            "avatar": "/images/avatar-2.png",
            "country_id": 77,
            "id": 3,
            "name": "Johanna (supplier)",
            "offers_count": 0,
            "params": {},
            "parent_id": null,
            "roles": [
              "supplier"
            ],
            "roles_methods": null,
            "supplier": false,
            "user_id": "2ae5fcf8-9ed5-480a-89c8-a2f946e72140",
            "currency": "EUR"
          }
      ]
      commit('set', data)
      const accountId = parseInt(data[0].id)
      activeAccount.set(accountId)
    },
    clear({ commit }) {
      commit('clear')
    },
    setCurrent({ commit }, id) {
      commit('setCurrent', id)
    },
    update({ _commit }, _payload) {
    }
  },
  getters: getters,
  mutations: mutations,
  state: state
}
export default moduleAccounts
