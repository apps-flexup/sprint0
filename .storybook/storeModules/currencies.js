import getters from '@/store/currencies/getters'
import mutations from '@/store/currencies/mutations'
import state from '@/store/currencies/state'

const moduleCurrencies = {
  namespaced: true,
  actions: {
    get({ commit }) {
      const data = [
        {
          active: true,
          id: 49,
          iso3: "EUR",
          ison: 978,
          minor: 2,
          name: "Euro"
        },
        {
          active: true,
          id: 149,
          iso3: "USD",
          ison: 840,
          minor: 2,
          name: "US Dollar"
        },
        {
          active: true,
          id: 3,
          iso3: "ALL",
          ison: 8,
          minor: 2,
          name: "Lek"
        },
        {
          active: true,
          id: 4,
          iso3: "AMD",
          ison: 51,
          minor: 2,
          name: "Armenian Dram"
        },
        {
          active: true,
          id: 6,
          iso3: "AOA",
          ison: 973,
          minor: 2,
          name: "Kwanza"
        },
        {
          active: true,
          id: 7,
          iso3: "ARS",
          ison: 32,
          minor: 2,
          name: "Argentine Peso"
        },
        {
          active: true,
          id: 8,
          iso3: "AUD",
          ison: 36,
          minor: 2,
          name: "Australian Dollar"
        },
        {
          active: true,
          id: 9,
          iso3: "AWG",
          ison: 533,
          minor: 2,
          name: "Aruban Florin"
        },
        {
          active: true,
          id: 10,
          iso3: "AZN",
          ison: 944,
          minor: 2,
          name: "Azerbaijan Manat"
        },
        {
          active: true,
          id: 11,
          iso3: "BAM",
          ison: 977,
          minor: 2,
          name: "Convertible Mark"
        },
        {
          active: true,
          id: 12,
          iso3: "BBD",
          ison: 52,
          minor: 2,
          name: "Barbados Dollar"
        },
        {
          active: true,
          id: 13,
          iso3: "BDT",
          ison: 50,
          minor: 2,
          name: "Taka"
        },
        {
          active: true,
          id: 14,
          iso3: "BGN",
          ison: 975,
          minor: 2,
          name: "Bulgarian Lev"
        },
        {
          active: true,
          id: 15,
          iso3: "BHD",
          ison: 48,
          minor: 3,
          name: "Bahraini Dinar"
        },
        {
          active: true,
          id: 16,
          iso3: "BIF",
          ison: 108,
          minor: 0,
          name: "Burundi Franc"
        },
        {
          active: true,
          id: 17,
          iso3: "BMD",
          ison: 60,
          minor: 2,
          name: "Bermudian Dollar"
        },
        {
          active: true,
          id: 18,
          iso3: "BND",
          ison: 96,
          minor: 2,
          name: "Brunei Dollar"
        },
        {
          active: true,
          id: 19,
          iso3: "BOB",
          ison: 68,
          minor: 2,
          name: "Boliviano"
        },
        {
          active: true,
          id: 20,
          iso3: "BOV",
          ison: 984,
          minor: 2,
          name: "Mvdol"
        },
        {
          active: true,
          id: 21,
          iso3: "BRL",
          ison: 986,
          minor: 2,
          name: "Brazilian Real"
        },
        {
          active: true,
          id: 22,
          iso3: "BSD",
          ison: 44,
          minor: 2,
          name: "Bahamian Dollar"
        },
        {
          active: true,
          id: 23,
          iso3: "BTN",
          ison: 64,
          minor: 2,
          name: "Ngultrum"
        },
        {
          active: true,
          id: 24,
          iso3: "BWP",
          ison: 72,
          minor: 2,
          name: "Pula"
        },
        {
          active: true,
          id: 25,
          iso3: "BYN",
          ison: 933,
          minor: 2,
          name: "Belarusian Ruble"
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
export default moduleCurrencies
