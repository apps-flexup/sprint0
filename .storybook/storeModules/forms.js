import getters from '@/store/forms/getters'
import mutations from '@/store/forms/mutations'
import state from '@/store/forms/state'

const modulesForms = {
  namespaced: true,
  actions: {
    getProduct({ commit }) {
      const data = [
        {
          "component": "fv-product-step-detail",
          "title": "forms.product.step.0"
        }
      ]
      commit('setProductSteps', data)
    },
    getOffer({ commit }) {
      const data = [
        {
          "component": "fv-offer-step-detail",
          "title": "forms.offer.step.0"
        }
      ]
      commit('setOfferSteps', data)
    }
  },
  getters: getters,
  mutations: mutations,
  state: state
}
export default modulesForms
