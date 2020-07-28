import getters from '@/store/countries/getters'
import mutations from '@/store/countries/mutations'
import state from '@/store/countries/state'

const moduleCountries = {
  namespaced: true,
  actions: {
    get({ commit }) {
      const data = [
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": true,
              "id": 49,
              "iso3": "EUR",
              "ison": 978,
              "minor": 2,
              "name": "Euro"
            }
          ],
          "id": 77,
          "iso2": "FR",
          "iso3": "FRA",
          "ison": 250,
          "languages": [
            {
              "active": true,
              "id": 47,
              "iso2": "fr",
              "name": null,
              "native": null
            }
          ],
          "name": "France",
          "sovereignty": {
            "countries_count": 193,
            "description": "UN member state",
            "id": 13,
            "name": "UN"
          },
          "sovereignty_id": 13
        },
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": true,
              "id": 49,
              "iso3": "EUR",
              "ison": 978,
              "minor": 2,
              "name": "Euro"
            }
          ],
          "id": 22,
          "iso2": "BE",
          "iso3": "BEL",
          "ison": 56,
          "languages": [
            {
              "active": false,
              "id": 114,
              "iso2": "nl",
              "name": null,
              "native": null
            },
            {
              "active": true,
              "id": 32,
              "iso2": "de",
              "name": null,
              "native": null
            },
            {
              "active": true,
              "id": 47,
              "iso2": "fr",
              "name": null,
              "native": null
            }
          ],
          "name": "Belgium",
          "sovereignty": {
            "countries_count": 193,
            "description": "UN member state",
            "id": 13,
            "name": "UN"
          },
          "sovereignty_id": 13
        },
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": true,
              "id": 49,
              "iso3": "EUR",
              "ison": 978,
              "minor": 2,
              "name": "Euro"
            }
          ],
          "id": 111,
          "iso2": "IT",
          "iso3": "ITA",
          "ison": 380,
          "languages": [
            {
              "active": true,
              "id": 72,
              "iso2": "it",
              "name": null,
              "native": null
            }
          ],
          "name": "Italy",
          "sovereignty": {
            "countries_count": 193,
            "description": "UN member state",
            "id": 13,
            "name": "UN"
          },
          "sovereignty_id": 13
        },
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": true,
              "id": 49,
              "iso3": "EUR",
              "ison": 978,
              "minor": 2,
              "name": "Euro"
            }
          ],
          "id": 84,
          "iso2": "DE",
          "iso3": "DEU",
          "ison": 276,
          "languages": [
            {
              "active": true,
              "id": 32,
              "iso2": "de",
              "name": null,
              "native": null
            }
          ],
          "name": "Germany",
          "sovereignty": {
            "countries_count": 193,
            "description": "UN member state",
            "id": 13,
            "name": "UN"
          },
          "sovereignty_id": 13
        },
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": false,
              "id": 52,
              "iso3": "GBP",
              "ison": 826,
              "minor": 2,
              "name": "Pound Sterling"
            },
            {
              "active": true,
              "id": 149,
              "iso3": "USD",
              "ison": 840,
              "minor": 2,
              "name": "US Dollar"
            }
          ],
          "id": 235,
          "iso2": "GB",
          "iso3": "GBR",
          "ison": 826,
          "languages": [
            {
              "active": true,
              "id": 37,
              "iso2": "en",
              "name": null,
              "native": null
            }
          ],
          "name": "United Kingdom of Great Britain and Northern Ireland (the)",
          "sovereignty": {
            "countries_count": 193,
            "description": "UN member state",
            "id": 13,
            "name": "UN"
          },
          "sovereignty_id": 13
        },
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": true,
              "id": 49,
              "iso3": "EUR",
              "ison": 978,
              "minor": 2,
              "name": "Euro"
            }
          ],
          "id": 210,
          "iso2": "ES",
          "iso3": "ESP",
          "ison": 724,
          "languages": [
            {
              "active": false,
              "id": 120,
              "iso2": "oc",
              "name": null,
              "native": null
            },
            {
              "active": false,
              "id": 51,
              "iso2": "gl",
              "name": null,
              "native": null
            },
            {
              "active": false,
              "id": 22,
              "iso2": "ca",
              "name": null,
              "native": null
            },
            {
              "active": false,
              "id": 41,
              "iso2": "eu",
              "name": null,
              "native": null
            },
            {
              "active": true,
              "id": 39,
              "iso2": "es",
              "name": null,
              "native": null
            }
          ],
          "name": "Spain",
          "sovereignty": {
            "countries_count": 193,
            "description": "UN member state",
            "id": 13,
            "name": "UN"
          },
          "sovereignty_id": 13
        },
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": false,
              "id": 2,
              "iso3": "AFN",
              "ison": 971,
              "minor": 2,
              "name": "Afghani"
            }
          ],
          "id": 1,
          "iso2": "AF",
          "iso3": "AFG",
          "ison": 4,
          "languages": [
            {
              "active": false,
              "id": 160,
              "iso2": "tk",
              "name": null,
              "native": null
            },
            {
              "active": false,
              "id": 172,
              "iso2": "uz",
              "name": null,
              "native": null
            },
            {
              "active": false,
              "id": 128,
              "iso2": "ps",
              "name": null,
              "native": null
            }
          ],
          "name": "Afghanistan",
          "sovereignty": {
            "countries_count": 193,
            "description": "UN member state",
            "id": 13,
            "name": "UN"
          },
          "sovereignty_id": 13
        },
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": true,
              "id": 49,
              "iso3": "EUR",
              "ison": 978,
              "minor": 2,
              "name": "Euro"
            }
          ],
          "id": 2,
          "iso2": "AX",
          "iso3": "ALA",
          "ison": 248,
          "languages": [
            {
              "active": false,
              "id": 153,
              "iso2": "sv",
              "name": null,
              "native": null
            }
          ],
          "name": "Åland Islands",
          "sovereignty": {
            "countries_count": 1,
            "description": "Finland",
            "id": 8,
            "name": "FI"
          },
          "sovereignty_id": 8
        },
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": false,
              "id": 3,
              "iso3": "ALL",
              "ison": 8,
              "minor": 2,
              "name": "Lek"
            }
          ],
          "id": 3,
          "iso2": "AL",
          "iso3": "ALB",
          "ison": 8,
          "languages": [
            {
              "active": false,
              "id": 148,
              "iso2": "sq",
              "name": null,
              "native": null
            }
          ],
          "name": "Albania",
          "sovereignty": {
            "countries_count": 193,
            "description": "UN member state",
            "id": 13,
            "name": "UN"
          },
          "sovereignty_id": 13
        },
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": false,
              "id": 45,
              "iso3": "DZD",
              "ison": 12,
              "minor": 2,
              "name": "Algerian Dinar"
            }
          ],
          "id": 4,
          "iso2": "DZ",
          "iso3": "DZA",
          "ison": 12,
          "languages": [
            {
              "active": false,
              "id": 7,
              "iso2": "ar",
              "name": null,
              "native": null
            }
          ],
          "name": "Algeria",
          "sovereignty": {
            "countries_count": 193,
            "description": "UN member state",
            "id": 13,
            "name": "UN"
          },
          "sovereignty_id": 13
        },
        {
          "active": true,
          "continent": null,
          "continent_id": null,
          "currencies": [
            {
              "active": true,
              "id": 149,
              "iso3": "USD",
              "ison": 840,
              "minor": 2,
              "name": "US Dollar"
            }
          ],
          "id": 5,
          "iso2": "AS",
          "iso3": "ASM",
          "ison": 16,
          "languages": [
            {
              "active": false,
              "id": 145,
              "iso2": "sm",
              "name": null,
              "native": null
            },
            {
              "active": true,
              "id": 37,
              "iso2": "en",
              "name": null,
              "native": null
            }
          ],
          "name": "American Samoa",
          "sovereignty": {
            "countries_count": 6,
            "description": "United States",
            "id": 16,
            "name": "US"
          },
          "sovereignty_id": 16
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
export default moduleCountries
