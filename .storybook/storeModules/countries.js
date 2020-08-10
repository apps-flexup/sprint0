import getters from '@/store/countries/getters'
import mutations from '@/store/countries/mutations'
import state from '@/store/countries/state'

const moduleCountries = {
  namespaced: true,
  actions: {
    get({ commit }) {
      const data = [
        {
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
          id: 77,
          iso2: "FR",
          iso3: "FRA",
          ison: 250,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "France",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 22,
          iso2: "BE",
          iso3: "BEL",
          ison: 56,
          languages: [
            {
              active: false,
              id: 114,
              iso2: "nl",
              name: null,
              native: null
            },
            {
              active: true,
              id: 32,
              iso2: "de",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Belgium",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 111,
          iso2: "IT",
          iso3: "ITA",
          ison: 380,
          languages: [
            {
              active: true,
              id: 72,
              iso2: "it",
              name: null,
              native: null
            }
          ],
          name: "Italy",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 84,
          iso2: "DE",
          iso3: "DEU",
          ison: 276,
          languages: [
            {
              active: true,
              id: 32,
              iso2: "de",
              name: null,
              native: null
            }
          ],
          name: "Germany",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 52,
              iso3: "GBP",
              ison: 826,
              minor: 2,
              name: "Pound Sterling"
            },
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 235,
          iso2: "GB",
          iso3: "GBR",
          ison: 826,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "United Kingdom of Great Britain and Northern Ireland (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 210,
          iso2: "ES",
          iso3: "ESP",
          ison: 724,
          languages: [
            {
              active: false,
              id: 120,
              iso2: "oc",
              name: null,
              native: null
            },
            {
              active: false,
              id: 51,
              iso2: "gl",
              name: null,
              native: null
            },
            {
              active: false,
              id: 22,
              iso2: "ca",
              name: null,
              native: null
            },
            {
              active: false,
              id: 41,
              iso2: "eu",
              name: null,
              native: null
            },
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Spain",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 2,
              iso3: "AFN",
              ison: 971,
              minor: 2,
              name: "Afghani"
            }
          ],
          id: 1,
          iso2: "AF",
          iso3: "AFG",
          ison: 4,
          languages: [
            {
              active: false,
              id: 160,
              iso2: "tk",
              name: null,
              native: null
            },
            {
              active: false,
              id: 172,
              iso2: "uz",
              name: null,
              native: null
            },
            {
              active: false,
              id: 128,
              iso2: "ps",
              name: null,
              native: null
            }
          ],
          name: "Afghanistan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 2,
          iso2: "AX",
          iso3: "ALA",
          ison: 248,
          languages: [
            {
              active: false,
              id: 153,
              iso2: "sv",
              name: null,
              native: null
            }
          ],
          name: "Åland Islands",
          sovereignty: {
            countries_count: 1,
            description: "Finland",
            id: 8,
            name: "FI"
          },
          sovereignty_id: 8
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 3,
              iso3: "ALL",
              ison: 8,
              minor: 2,
              name: "Lek"
            }
          ],
          id: 3,
          iso2: "AL",
          iso3: "ALB",
          ison: 8,
          languages: [
            {
              active: false,
              id: 148,
              iso2: "sq",
              name: null,
              native: null
            }
          ],
          name: "Albania",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 45,
              iso3: "DZD",
              ison: 12,
              minor: 2,
              name: "Algerian Dinar"
            }
          ],
          id: 4,
          iso2: "DZ",
          iso3: "DZA",
          ison: 12,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Algeria",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 5,
          iso2: "AS",
          iso3: "ASM",
          ison: 16,
          languages: [
            {
              active: false,
              id: 145,
              iso2: "sm",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "American Samoa",
          sovereignty: {
            countries_count: 6,
            description: "United States",
            id: 16,
            name: "US"
          },
          sovereignty_id: 16
        },
        {
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
          id: 6,
          iso2: "AD",
          iso3: "AND",
          ison: 20,
          languages: [
            {
              active: false,
              id: 22,
              iso2: "ca",
              name: null,
              native: null
            }
          ],
          name: "Andorra",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 6,
              iso3: "AOA",
              ison: 973,
              minor: 2,
              name: "Kwanza"
            }
          ],
          id: 7,
          iso2: "AO",
          iso3: "AGO",
          ison: 24,
          languages: [
            {
              active: false,
              id: 129,
              iso2: "pt",
              name: null,
              native: null
            }
          ],
          name: "Angola",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 160,
              iso3: "XCD",
              ison: 951,
              minor: 2,
              name: "East Caribbean Dollar"
            }
          ],
          id: 8,
          iso2: "AI",
          iso3: "AIA",
          ison: 660,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Anguilla",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [ ],
          id: 9,
          iso2: "AQ",
          iso3: "ATA",
          ison: 10,
          languages: [ ],
          name: "Antarctica",
          sovereignty: {
            countries_count: 1,
            description: "Antarctic Treaty",
            id: 1,
            name: "AT"
          },
          sovereignty_id: 1
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 160,
              iso3: "XCD",
              ison: 951,
              minor: 2,
              name: "East Caribbean Dollar"
            }
          ],
          id: 10,
          iso2: "AG",
          iso3: "ATG",
          ison: 28,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Antigua and Barbuda",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 7,
              iso3: "ARS",
              ison: 32,
              minor: 2,
              name: "Argentine Peso"
            }
          ],
          id: 11,
          iso2: "AR",
          iso3: "ARG",
          ison: 32,
          languages: [
            {
              active: false,
              id: 52,
              iso2: "gn",
              name: null,
              native: null
            },
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Argentina",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 4,
              iso3: "AMD",
              ison: 51,
              minor: 2,
              name: "Armenian Dram"
            }
          ],
          id: 12,
          iso2: "AM",
          iso3: "ARM",
          ison: 51,
          languages: [
            {
              active: false,
              id: 134,
              iso2: "ru",
              name: null,
              native: null
            },
            {
              active: false,
              id: 62,
              iso2: "hy",
              name: null,
              native: null
            }
          ],
          name: "Armenia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 9,
              iso3: "AWG",
              ison: 533,
              minor: 2,
              name: "Aruban Florin"
            }
          ],
          id: 13,
          iso2: "AW",
          iso3: "ABW",
          ison: 533,
          languages: [
            {
              active: false,
              id: 125,
              iso2: "pa",
              name: null,
              native: null
            },
            {
              active: false,
              id: 114,
              iso2: "nl",
              name: null,
              native: null
            }
          ],
          name: "Aruba",
          sovereignty: {
            countries_count: 4,
            description: "Netherlands",
            id: 10,
            name: "NL"
          },
          sovereignty_id: 10
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 8,
              iso3: "AUD",
              ison: 36,
              minor: 2,
              name: "Australian Dollar"
            }
          ],
          id: 14,
          iso2: "AU",
          iso3: "AUS",
          ison: 36,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Australia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 15,
          iso2: "AT",
          iso3: "AUT",
          ison: 40,
          languages: [
            {
              active: true,
              id: 32,
              iso2: "de",
              name: null,
              native: null
            }
          ],
          name: "Austria",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 10,
              iso3: "AZN",
              ison: 944,
              minor: 2,
              name: "Azerbaijan Manat"
            }
          ],
          id: 16,
          iso2: "AZ",
          iso3: "AZE",
          ison: 31,
          languages: [
            {
              active: false,
              id: 11,
              iso2: "az",
              name: null,
              native: null
            }
          ],
          name: "Azerbaijan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 22,
              iso3: "BSD",
              ison: 44,
              minor: 2,
              name: "Bahamian Dollar"
            }
          ],
          id: 17,
          iso2: "BS",
          iso3: "BHS",
          ison: 44,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Bahamas (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 15,
              iso3: "BHD",
              ison: 48,
              minor: 3,
              name: "Bahraini Dinar"
            }
          ],
          id: 18,
          iso2: "BH",
          iso3: "BHR",
          ison: 48,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Bahrain",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 13,
              iso3: "BDT",
              ison: 50,
              minor: 2,
              name: "Taka"
            }
          ],
          id: 19,
          iso2: "BD",
          iso3: "BGD",
          ison: 50,
          languages: [
            {
              active: false,
              id: 18,
              iso2: "bn",
              name: null,
              native: null
            }
          ],
          name: "Bangladesh",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 12,
              iso3: "BBD",
              ison: 52,
              minor: 2,
              name: "Barbados Dollar"
            }
          ],
          id: 20,
          iso2: "BB",
          iso3: "BRB",
          ison: 52,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Barbados",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 25,
              iso3: "BYN",
              ison: 933,
              minor: 2,
              name: "Belarusian Ruble"
            }
          ],
          id: 21,
          iso2: "BY",
          iso3: "BLR",
          ison: 112,
          languages: [
            {
              active: false,
              id: 134,
              iso2: "ru",
              name: null,
              native: null
            },
            {
              active: false,
              id: 13,
              iso2: "be",
              name: null,
              native: null
            }
          ],
          name: "Belarus",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 26,
              iso3: "BZD",
              ison: 84,
              minor: 2,
              name: "Belize Dollar"
            }
          ],
          id: 23,
          iso2: "BZ",
          iso3: "BLZ",
          ison: 84,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Belize",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 161,
              iso3: "XOF",
              ison: 952,
              minor: 0,
              name: "CFA Franc BCEAO"
            }
          ],
          id: 24,
          iso2: "BJ",
          iso3: "BEN",
          ison: 204,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Benin",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 17,
              iso3: "BMD",
              ison: 60,
              minor: 2,
              name: "Bermudian Dollar"
            }
          ],
          id: 25,
          iso2: "BM",
          iso3: "BMU",
          ison: 60,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Bermuda",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 67,
              iso3: "INR",
              ison: 356,
              minor: 2,
              name: "Indian Rupee"
            },
            {
              active: false,
              id: 23,
              iso3: "BTN",
              ison: 64,
              minor: 2,
              name: "Ngultrum"
            }
          ],
          id: 26,
          iso2: "BT",
          iso3: "BTN",
          ison: 64,
          languages: [
            {
              active: false,
              id: 34,
              iso2: "dz",
              name: null,
              native: null
            }
          ],
          name: "Bhutan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 20,
              iso3: "BOV",
              ison: 984,
              minor: 2,
              name: "Mvdol"
            },
            {
              active: false,
              id: 19,
              iso3: "BOB",
              ison: 68,
              minor: 2,
              name: "Boliviano"
            }
          ],
          id: 27,
          iso2: "BO",
          iso3: "BOL",
          ison: 68,
          languages: [
            {
              active: false,
              id: 130,
              iso2: "qu",
              name: null,
              native: null
            },
            {
              active: false,
              id: 10,
              iso2: "ay",
              name: null,
              native: null
            },
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Bolivia (Plurinational State of)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 28,
          iso2: "BQ",
          iso3: "BES",
          ison: 535,
          languages: [
            {
              active: false,
              id: 114,
              iso2: "nl",
              name: null,
              native: null
            }
          ],
          name: "Bonaire",
          sovereignty: {
            countries_count: 4,
            description: "Netherlands",
            id: 10,
            name: "NL"
          },
          sovereignty_id: 10
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 11,
              iso3: "BAM",
              ison: 977,
              minor: 2,
              name: "Convertible Mark"
            }
          ],
          id: 29,
          iso2: "BA",
          iso3: "BIH",
          ison: 70,
          languages: [
            {
              active: false,
              id: 149,
              iso2: "sr",
              name: null,
              native: null
            },
            {
              active: false,
              id: 59,
              iso2: "hr",
              name: null,
              native: null
            },
            {
              active: false,
              id: 21,
              iso2: "bs",
              name: null,
              native: null
            }
          ],
          name: "Bosnia and Herzegovina",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 24,
              iso3: "BWP",
              ison: 72,
              minor: 2,
              name: "Pula"
            }
          ],
          id: 30,
          iso2: "BW",
          iso3: "BWA",
          ison: 72,
          languages: [
            {
              active: false,
              id: 162,
              iso2: "tn",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Botswana",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 107,
              iso3: "NOK",
              ison: 578,
              minor: 2,
              name: "Norwegian Krone"
            }
          ],
          id: 31,
          iso2: "BV",
          iso3: "BVT",
          ison: 74,
          languages: [
            {
              active: false,
              id: 115,
              iso2: "nn",
              name: null,
              native: null
            },
            {
              active: false,
              id: 116,
              iso2: "no",
              name: null,
              native: null
            }
          ],
          name: "Bouvet Island",
          sovereignty: {
            countries_count: 2,
            description: "Norway",
            id: 12,
            name: "NO"
          },
          sovereignty_id: 12
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 21,
              iso3: "BRL",
              ison: 986,
              minor: 2,
              name: "Brazilian Real"
            }
          ],
          id: 32,
          iso2: "BR",
          iso3: "BRA",
          ison: 76,
          languages: [
            {
              active: false,
              id: 129,
              iso2: "pt",
              name: null,
              native: null
            }
          ],
          name: "Brazil",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 33,
          iso2: "IO",
          iso3: "IOT",
          ison: 86,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "British Indian Ocean Territory (the)",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 18,
              iso3: "BND",
              ison: 96,
              minor: 2,
              name: "Brunei Dollar"
            }
          ],
          id: 34,
          iso2: "BN",
          iso3: "BRN",
          ison: 96,
          languages: [
            {
              active: false,
              id: 107,
              iso2: "ms",
              name: null,
              native: null
            }
          ],
          name: "Brunei Darussalam",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 14,
              iso3: "BGN",
              ison: 975,
              minor: 2,
              name: "Bulgarian Lev"
            }
          ],
          id: 35,
          iso2: "BG",
          iso3: "BGR",
          ison: 100,
          languages: [
            {
              active: false,
              id: 14,
              iso2: "bg",
              name: null,
              native: null
            }
          ],
          name: "Bulgaria",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 161,
              iso3: "XOF",
              ison: 952,
              minor: 0,
              name: "CFA Franc BCEAO"
            }
          ],
          id: 36,
          iso2: "BF",
          iso3: "BFA",
          ison: 854,
          languages: [
            {
              active: false,
              id: 43,
              iso2: "ff",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Burkina Faso",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 40,
              iso3: "CVE",
              ison: 132,
              minor: 2,
              name: "Cabo Verde Escudo"
            },
            {
              active: false,
              id: 16,
              iso3: "BIF",
              ison: 108,
              minor: 0,
              name: "Burundi Franc"
            }
          ],
          id: 37,
          iso2: "BI",
          iso3: "BDI",
          ison: 108,
          languages: [
            {
              active: false,
              id: 132,
              iso2: "rn",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Burundi",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 40,
              iso3: "CVE",
              ison: 132,
              minor: 2,
              name: "Cabo Verde Escudo"
            }
          ],
          id: 38,
          iso2: "CV",
          iso3: "CPV",
          ison: 132,
          languages: [
            {
              active: false,
              id: 129,
              iso2: "pt",
              name: null,
              native: null
            }
          ],
          name: "Cabo Verde",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 76,
              iso3: "KHR",
              ison: 116,
              minor: 2,
              name: "Riel"
            }
          ],
          id: 39,
          iso2: "KH",
          iso3: "KHM",
          ison: 116,
          languages: [
            {
              active: false,
              id: 82,
              iso2: "km",
              name: null,
              native: null
            }
          ],
          name: "Cambodia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 159,
              iso3: "XAF",
              ison: 950,
              minor: 0,
              name: "CFA Franc BEAC"
            }
          ],
          id: 40,
          iso2: "CM",
          iso3: "CMR",
          ison: 120,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Cameroon",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 27,
              iso3: "CAD",
              ison: 124,
              minor: 2,
              name: "Canadian Dollar"
            }
          ],
          id: 41,
          iso2: "CA",
          iso3: "CAN",
          ison: 124,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Canada",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 81,
              iso3: "KYD",
              ison: 136,
              minor: 2,
              name: "Cayman Islands Dollar"
            }
          ],
          id: 42,
          iso2: "KY",
          iso3: "CYM",
          ison: 136,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Cayman Islands (the)",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 159,
              iso3: "XAF",
              ison: 950,
              minor: 0,
              name: "CFA Franc BEAC"
            }
          ],
          id: 43,
          iso2: "CF",
          iso3: "CAF",
          ison: 140,
          languages: [
            {
              active: false,
              id: 140,
              iso2: "sg",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Central African Republic (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 159,
              iso3: "XAF",
              ison: 950,
              minor: 0,
              name: "CFA Franc BEAC"
            }
          ],
          id: 44,
          iso2: "TD",
          iso3: "TCD",
          ison: 148,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Chad",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 33,
              iso3: "CLP",
              ison: 152,
              minor: 0,
              name: "Chilean Peso"
            },
            {
              active: false,
              id: 32,
              iso3: "CLF",
              ison: 990,
              minor: 4,
              name: "Unidad de Fomento"
            }
          ],
          id: 45,
          iso2: "CL",
          iso3: "CHL",
          ison: 152,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Chile",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 34,
              iso3: "CNY",
              ison: 156,
              minor: 2,
              name: "Yuan Renminbi"
            }
          ],
          id: 46,
          iso2: "CN",
          iso3: "CHN",
          ison: 156,
          languages: [
            {
              active: false,
              id: 182,
              iso2: "zh",
              name: null,
              native: null
            }
          ],
          name: "China",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 8,
              iso3: "AUD",
              ison: 36,
              minor: 2,
              name: "Australian Dollar"
            }
          ],
          id: 47,
          iso2: "CX",
          iso3: "CXR",
          ison: 162,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Christmas Island",
          sovereignty: {
            countries_count: 4,
            description: "Australia",
            id: 2,
            name: "AU"
          },
          sovereignty_id: 2
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 8,
              iso3: "AUD",
              ison: 36,
              minor: 2,
              name: "Australian Dollar"
            }
          ],
          id: 48,
          iso2: "CC",
          iso3: "CCK",
          ison: 166,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Cocos (Keeling) Islands (the)",
          sovereignty: {
            countries_count: 4,
            description: "Australia",
            id: 2,
            name: "AU"
          },
          sovereignty_id: 2
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 36,
              iso3: "COU",
              ison: 970,
              minor: 2,
              name: "Unidad de Valor Real"
            },
            {
              active: false,
              id: 35,
              iso3: "COP",
              ison: 170,
              minor: 2,
              name: "Colombian Peso"
            }
          ],
          id: 49,
          iso2: "CO",
          iso3: "COL",
          ison: 170,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Colombia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 77,
              iso3: "KMF",
              ison: 174,
              minor: 0,
              name: "Comorian Franc "
            }
          ],
          id: 50,
          iso2: "KM",
          iso3: "COM",
          ison: 174,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Comoros (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 159,
              iso3: "XAF",
              ison: 950,
              minor: 0,
              name: "CFA Franc BEAC"
            },
            {
              active: false,
              id: 28,
              iso3: "CDF",
              ison: 976,
              minor: 2,
              name: "Congolese Franc"
            }
          ],
          id: 51,
          iso2: "CD",
          iso3: "COD",
          ison: 180,
          languages: [
            {
              active: false,
              id: 154,
              iso2: "sw",
              name: null,
              native: null
            },
            {
              active: false,
              id: 77,
              iso2: "kg",
              name: null,
              native: null
            },
            {
              active: false,
              id: 95,
              iso2: "ln",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Congo (the Democratic Republic of the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 159,
              iso3: "XAF",
              ison: 950,
              minor: 0,
              name: "CFA Franc BEAC"
            }
          ],
          id: 52,
          iso2: "CG",
          iso3: "COG",
          ison: 178,
          languages: [
            {
              active: false,
              id: 95,
              iso2: "ln",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Congo (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 109,
              iso3: "NZD",
              ison: 554,
              minor: 2,
              name: "New Zealand Dollar"
            }
          ],
          id: 53,
          iso2: "CK",
          iso3: "COK",
          ison: 184,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Cook Islands (the)",
          sovereignty: {
            countries_count: 3,
            description: "New Zealand",
            id: 11,
            name: "NZ"
          },
          sovereignty_id: 11
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 161,
              iso3: "XOF",
              ison: 952,
              minor: 0,
              name: "CFA Franc BCEAO"
            },
            {
              active: false,
              id: 37,
              iso3: "CRC",
              ison: 188,
              minor: 2,
              name: "Costa Rican Colon"
            }
          ],
          id: 54,
          iso2: "CR",
          iso3: "CRI",
          ison: 188,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Costa Rica",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 161,
              iso3: "XOF",
              ison: 952,
              minor: 0,
              name: "CFA Franc BCEAO"
            }
          ],
          id: 55,
          iso2: "CI",
          iso3: "CIV",
          ison: 384,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Côte d'Ivoire",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 62,
              iso3: "HRK",
              ison: 191,
              minor: 2,
              name: "Kuna"
            }
          ],
          id: 56,
          iso2: "HR",
          iso3: "HRV",
          ison: 191,
          languages: [
            {
              active: false,
              id: 59,
              iso2: "hr",
              name: null,
              native: null
            }
          ],
          name: "Croatia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 39,
              iso3: "CUP",
              ison: 192,
              minor: 2,
              name: "Cuban Peso"
            },
            {
              active: false,
              id: 38,
              iso3: "CUC",
              ison: 931,
              minor: 2,
              name: "Peso Convertible"
            }
          ],
          id: 57,
          iso2: "CU",
          iso3: "CUB",
          ison: 192,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Cuba",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 5,
              iso3: "ANG",
              ison: 532,
              minor: 2,
              name: "Netherlands Antillean Guilder"
            }
          ],
          id: 58,
          iso2: "CW",
          iso3: "CUW",
          ison: 531,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 125,
              iso2: "pa",
              name: null,
              native: null
            },
            {
              active: false,
              id: 114,
              iso2: "nl",
              name: null,
              native: null
            }
          ],
          name: "Curaçao",
          sovereignty: {
            countries_count: 4,
            description: "Netherlands",
            id: 10,
            name: "NL"
          },
          sovereignty_id: 10
        },
        {
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
            },
            {
              active: false,
              id: 41,
              iso3: "CZK",
              ison: 203,
              minor: 2,
              name: "Czech Koruna"
            }
          ],
          id: 59,
          iso2: "CY",
          iso3: "CYP",
          ison: 196,
          languages: [
            {
              active: false,
              id: 62,
              iso2: "hy",
              name: null,
              native: null
            },
            {
              active: false,
              id: 164,
              iso2: "tr",
              name: null,
              native: null
            },
            {
              active: false,
              id: 36,
              iso2: "el",
              name: null,
              native: null
            }
          ],
          name: "Cyprus",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 41,
              iso3: "CZK",
              ison: 203,
              minor: 2,
              name: "Czech Koruna"
            }
          ],
          id: 60,
          iso2: "CZ",
          iso3: "CZE",
          ison: 203,
          languages: [
            {
              active: false,
              id: 143,
              iso2: "sk",
              name: null,
              native: null
            },
            {
              active: false,
              id: 27,
              iso2: "cs",
              name: null,
              native: null
            }
          ],
          name: "Czechia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 42,
              iso3: "DJF",
              ison: 262,
              minor: 0,
              name: "Djibouti Franc"
            }
          ],
          id: 62,
          iso2: "DJ",
          iso3: "DJI",
          ison: 262,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Djibouti",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 160,
              iso3: "XCD",
              ison: 951,
              minor: 2,
              name: "East Caribbean Dollar"
            }
          ],
          id: 63,
          iso2: "DM",
          iso3: "DMA",
          ison: 212,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Dominica",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 44,
              iso3: "DOP",
              ison: 214,
              minor: 2,
              name: "Dominican Peso"
            }
          ],
          id: 64,
          iso2: "DO",
          iso3: "DOM",
          ison: 214,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Dominican Republic (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 65,
          iso2: "EC",
          iso3: "ECU",
          ison: 218,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Ecuador",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 46,
              iso3: "EGP",
              ison: 818,
              minor: 2,
              name: "Egyptian Pound"
            }
          ],
          id: 66,
          iso2: "EG",
          iso3: "EGY",
          ison: 818,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Egypt",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            },
            {
              active: false,
              id: 135,
              iso3: "SVC",
              ison: 222,
              minor: 2,
              name: "El Salvador Colon"
            }
          ],
          id: 67,
          iso2: "SV",
          iso3: "SLV",
          ison: 222,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "El Salvador",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 159,
              iso3: "XAF",
              ison: 950,
              minor: 0,
              name: "CFA Franc BEAC"
            }
          ],
          id: 68,
          iso2: "GQ",
          iso3: "GNQ",
          ison: 226,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Equatorial Guinea",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 47,
              iso3: "ERN",
              ison: 232,
              minor: 2,
              name: "Nakfa"
            }
          ],
          id: 69,
          iso2: "ER",
          iso3: "ERI",
          ison: 232,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            },
            {
              active: false,
              id: 159,
              iso2: "ti",
              name: null,
              native: null
            }
          ],
          name: "Eritrea",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 137,
              iso3: "SZL",
              ison: 748,
              minor: 2,
              name: "Lilangeni"
            },
            {
              active: true,
              id: 49,
              iso3: "EUR",
              ison: 978,
              minor: 2,
              name: "Euro"
            }
          ],
          id: 70,
          iso2: "EE",
          iso3: "EST",
          ison: 233,
          languages: [
            {
              active: false,
              id: 40,
              iso2: "et",
              name: null,
              native: null
            }
          ],
          name: "Estonia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 137,
              iso3: "SZL",
              ison: 748,
              minor: 2,
              name: "Lilangeni"
            }
          ],
          id: 71,
          iso2: "SZ",
          iso3: "SWZ",
          ison: 748,
          languages: [
            {
              active: false,
              id: 150,
              iso2: "ss",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Eswatini",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 51,
              iso3: "FKP",
              ison: 238,
              minor: 2,
              name: "Falkland Islands Pound"
            },
            {
              active: true,
              id: 49,
              iso3: "EUR",
              ison: 978,
              minor: 2,
              name: "Euro"
            },
            {
              active: false,
              id: 48,
              iso3: "ETB",
              ison: 230,
              minor: 2,
              name: "Ethiopian Birr"
            }
          ],
          id: 72,
          iso2: "ET",
          iso3: "ETH",
          ison: 231,
          languages: [
            {
              active: false,
              id: 5,
              iso2: "am",
              name: null,
              native: null
            }
          ],
          name: "Ethiopia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 51,
              iso3: "FKP",
              ison: 238,
              minor: 2,
              name: "Falkland Islands Pound"
            }
          ],
          id: 73,
          iso2: "FK",
          iso3: "FLK",
          ison: 238,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Falkland Islands (the)",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 43,
              iso3: "DKK",
              ison: 208,
              minor: 2,
              name: "Danish Krone"
            }
          ],
          id: 74,
          iso2: "FO",
          iso3: "FRO",
          ison: 234,
          languages: [
            {
              active: false,
              id: 46,
              iso2: "fo",
              name: null,
              native: null
            }
          ],
          name: "Faroe Islands (the)",
          sovereignty: {
            countries_count: 2,
            description: "Denmark",
            id: 5,
            name: "DN"
          },
          sovereignty_id: 5
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 50,
              iso3: "FJD",
              ison: 242,
              minor: 2,
              name: "Fiji Dollar"
            }
          ],
          id: 75,
          iso2: "FJ",
          iso3: "FJI",
          ison: 242,
          languages: [
            {
              active: false,
              id: 171,
              iso2: "ur",
              name: null,
              native: null
            },
            {
              active: false,
              id: 57,
              iso2: "hi",
              name: null,
              native: null
            },
            {
              active: false,
              id: 45,
              iso2: "fj",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Fiji",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
            },
            {
              active: true,
              id: 49,
              iso3: "EUR",
              ison: 978,
              minor: 2,
              name: "Euro"
            }
          ],
          id: 76,
          iso2: "FI",
          iso3: "FIN",
          ison: 246,
          languages: [
            {
              active: false,
              id: 153,
              iso2: "sv",
              name: null,
              native: null
            },
            {
              active: false,
              id: 44,
              iso2: "fi",
              name: null,
              native: null
            }
          ],
          name: "Finland",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 78,
          iso2: "GF",
          iso3: "GUF",
          ison: 254,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "French Guiana",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 162,
              iso3: "XPF",
              ison: 953,
              minor: 0,
              name: "CFP Franc"
            },
            {
              active: true,
              id: 49,
              iso3: "EUR",
              ison: 978,
              minor: 2,
              name: "Euro"
            }
          ],
          id: 79,
          iso2: "PF",
          iso3: "PYF",
          ison: 258,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "French Polynesia",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
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
          id: 80,
          iso2: "TF",
          iso3: "ATF",
          ison: 260,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "French Southern Territories",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 159,
              iso3: "XAF",
              ison: 950,
              minor: 0,
              name: "CFA Franc BEAC"
            }
          ],
          id: 81,
          iso2: "GA",
          iso3: "GAB",
          ison: 266,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Gabon",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 56,
              iso3: "GMD",
              ison: 270,
              minor: 2,
              name: "Dalasi"
            }
          ],
          id: 82,
          iso2: "GM",
          iso3: "GMB",
          ison: 270,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Gambia (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 53,
              iso3: "GEL",
              ison: 981,
              minor: 2,
              name: "Lari"
            }
          ],
          id: 83,
          iso2: "GE",
          iso3: "GEO",
          ison: 268,
          languages: [
            {
              active: false,
              id: 76,
              iso2: "ka",
              name: null,
              native: null
            }
          ],
          name: "Georgia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 54,
              iso3: "GHS",
              ison: 936,
              minor: 2,
              name: "Ghana Cedi"
            }
          ],
          id: 85,
          iso2: "GH",
          iso3: "GHA",
          ison: 288,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Ghana",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 55,
              iso3: "GIP",
              ison: 292,
              minor: 2,
              name: "Gibraltar Pound"
            }
          ],
          id: 86,
          iso2: "GI",
          iso3: "GIB",
          ison: 292,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Gibraltar",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
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
          id: 87,
          iso2: "GR",
          iso3: "GRC",
          ison: 300,
          languages: [
            {
              active: false,
              id: 36,
              iso2: "el",
              name: null,
              native: null
            }
          ],
          name: "Greece",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 43,
              iso3: "DKK",
              ison: 208,
              minor: 2,
              name: "Danish Krone"
            }
          ],
          id: 88,
          iso2: "GL",
          iso3: "GRL",
          ison: 304,
          languages: [
            {
              active: false,
              id: 81,
              iso2: "kl",
              name: null,
              native: null
            }
          ],
          name: "Greenland",
          sovereignty: {
            countries_count: 2,
            description: "Denmark",
            id: 5,
            name: "DN"
          },
          sovereignty_id: 5
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 160,
              iso3: "XCD",
              ison: 951,
              minor: 2,
              name: "East Caribbean Dollar"
            }
          ],
          id: 89,
          iso2: "GD",
          iso3: "GRD",
          ison: 308,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Grenada",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 90,
          iso2: "GP",
          iso3: "GLP",
          ison: 312,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Guadeloupe",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 91,
          iso2: "GU",
          iso3: "GUM",
          ison: 316,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            },
            {
              active: false,
              id: 24,
              iso2: "ch",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Guam",
          sovereignty: {
            countries_count: 6,
            description: "United States",
            id: 16,
            name: "US"
          },
          sovereignty_id: 16
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 58,
              iso3: "GTQ",
              ison: 320,
              minor: 2,
              name: "Quetzal"
            }
          ],
          id: 92,
          iso2: "GT",
          iso3: "GTM",
          ison: 320,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Guatemala",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 52,
              iso3: "GBP",
              ison: 826,
              minor: 2,
              name: "Pound Sterling"
            }
          ],
          id: 93,
          iso2: "GG",
          iso3: "GGY",
          ison: 831,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Guernsey",
          sovereignty: {
            countries_count: 3,
            description: "British Crown",
            id: 3,
            name: "BC"
          },
          sovereignty_id: 3
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 161,
              iso3: "XOF",
              ison: 952,
              minor: 0,
              name: "CFA Franc BCEAO"
            }
          ],
          id: 95,
          iso2: "GW",
          iso3: "GNB",
          ison: 624,
          languages: [
            {
              active: false,
              id: 129,
              iso2: "pt",
              name: null,
              native: null
            }
          ],
          name: "Guinea-Bissau",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 59,
              iso3: "GYD",
              ison: 328,
              minor: 2,
              name: "Guyana Dollar"
            }
          ],
          id: 96,
          iso2: "GY",
          iso3: "GUY",
          ison: 328,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Guyana",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            },
            {
              active: false,
              id: 63,
              iso3: "HTG",
              ison: 332,
              minor: 2,
              name: "Gourde"
            }
          ],
          id: 97,
          iso2: "HT",
          iso3: "HTI",
          ison: 332,
          languages: [
            {
              active: false,
              id: 60,
              iso2: "ht",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Haiti",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
            },
            {
              active: false,
              id: 8,
              iso3: "AUD",
              ison: 36,
              minor: 2,
              name: "Australian Dollar"
            }
          ],
          id: 98,
          iso2: "HM",
          iso3: "HMD",
          ison: 334,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Heard Island and McDonald Islands",
          sovereignty: {
            countries_count: 4,
            description: "Australia",
            id: 2,
            name: "AU"
          },
          sovereignty_id: 2
        },
        {
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
          id: 99,
          iso2: "VA",
          iso3: "VAT",
          ison: 336,
          languages: [
            {
              active: false,
              id: 91,
              iso2: "la",
              name: null,
              native: null
            },
            {
              active: true,
              id: 72,
              iso2: "it",
              name: null,
              native: null
            }
          ],
          name: "Holy See (the)",
          sovereignty: {
            countries_count: 2,
            description: "UN observer",
            id: 14,
            name: "UNO"
          },
          sovereignty_id: 14
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 61,
              iso3: "HNL",
              ison: 340,
              minor: 2,
              name: "Lempira"
            }
          ],
          id: 100,
          iso2: "HN",
          iso3: "HND",
          ison: 340,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Honduras",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 60,
              iso3: "HKD",
              ison: 344,
              minor: 2,
              name: "Hong Kong Dollar"
            }
          ],
          id: 101,
          iso2: "HK",
          iso3: "HKG",
          ison: 344,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 182,
              iso2: "zh",
              name: null,
              native: null
            }
          ],
          name: "Hong Kong",
          sovereignty: {
            countries_count: 2,
            description: "China",
            id: 4,
            name: "CH"
          },
          sovereignty_id: 4
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 64,
              iso3: "HUF",
              ison: 348,
              minor: 2,
              name: "Forint"
            }
          ],
          id: 102,
          iso2: "HU",
          iso3: "HUN",
          ison: 348,
          languages: [
            {
              active: false,
              id: 61,
              iso2: "hu",
              name: null,
              native: null
            }
          ],
          name: "Hungary",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 70,
              iso3: "ISK",
              ison: 352,
              minor: 0,
              name: "Iceland Krona"
            }
          ],
          id: 103,
          iso2: "IS",
          iso3: "ISL",
          ison: 352,
          languages: [
            {
              active: false,
              id: 71,
              iso2: "is",
              name: null,
              native: null
            }
          ],
          name: "Iceland",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 67,
              iso3: "INR",
              ison: 356,
              minor: 2,
              name: "Indian Rupee"
            }
          ],
          id: 104,
          iso2: "IN",
          iso3: "IND",
          ison: 356,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 57,
              iso2: "hi",
              name: null,
              native: null
            }
          ],
          name: "India",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 65,
              iso3: "IDR",
              ison: 360,
              minor: 2,
              name: "Rupiah"
            }
          ],
          id: 105,
          iso2: "ID",
          iso3: "IDN",
          ison: 360,
          languages: [
            {
              active: false,
              id: 65,
              iso2: "id",
              name: null,
              native: null
            }
          ],
          name: "Indonesia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 69,
              iso3: "IRR",
              ison: 364,
              minor: 2,
              name: "Iranian Rial"
            }
          ],
          id: 106,
          iso2: "IR",
          iso3: "IRN",
          ison: 364,
          languages: [
            {
              active: false,
              id: 42,
              iso2: "fa",
              name: null,
              native: null
            }
          ],
          name: "Iran (Islamic Republic of)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 68,
              iso3: "IQD",
              ison: 368,
              minor: 3,
              name: "Iraqi Dinar"
            }
          ],
          id: 107,
          iso2: "IQ",
          iso3: "IRQ",
          ison: 368,
          languages: [
            {
              active: false,
              id: 87,
              iso2: "ku",
              name: null,
              native: null
            },
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Iraq",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 108,
          iso2: "IE",
          iso3: "IRL",
          ison: 372,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 49,
              iso2: "ga",
              name: null,
              native: null
            }
          ],
          name: "Ireland",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 52,
              iso3: "GBP",
              ison: 826,
              minor: 2,
              name: "Pound Sterling"
            }
          ],
          id: 109,
          iso2: "IM",
          iso3: "IMN",
          ison: 833,
          languages: [
            {
              active: false,
              id: 54,
              iso2: "gv",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Isle of Man",
          sovereignty: {
            countries_count: 3,
            description: "British Crown",
            id: 3,
            name: "BC"
          },
          sovereignty_id: 3
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 66,
              iso3: "ILS",
              ison: 376,
              minor: 2,
              name: "New Israeli Sheqel"
            }
          ],
          id: 110,
          iso2: "IL",
          iso3: "ISR",
          ison: 376,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            },
            {
              active: false,
              id: 56,
              iso2: "he",
              name: null,
              native: null
            }
          ],
          name: "Israel",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 71,
              iso3: "JMD",
              ison: 388,
              minor: 2,
              name: "Jamaican Dollar"
            }
          ],
          id: 112,
          iso2: "JM",
          iso3: "JAM",
          ison: 388,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Jamaica",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 73,
              iso3: "JPY",
              ison: 392,
              minor: 0,
              name: "Yen"
            }
          ],
          id: 113,
          iso2: "JP",
          iso3: "JPN",
          ison: 392,
          languages: [
            {
              active: false,
              id: 74,
              iso2: "ja",
              name: null,
              native: null
            }
          ],
          name: "Japan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 52,
              iso3: "GBP",
              ison: 826,
              minor: 2,
              name: "Pound Sterling"
            }
          ],
          id: 114,
          iso2: "JE",
          iso3: "JEY",
          ison: 832,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Jersey",
          sovereignty: {
            countries_count: 3,
            description: "British Crown",
            id: 3,
            name: "BC"
          },
          sovereignty_id: 3
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 72,
              iso3: "JOD",
              ison: 400,
              minor: 3,
              name: "Jordanian Dinar"
            }
          ],
          id: 115,
          iso2: "JO",
          iso3: "JOR",
          ison: 400,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Jordan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 82,
              iso3: "KZT",
              ison: 398,
              minor: 2,
              name: "Tenge"
            }
          ],
          id: 116,
          iso2: "KZ",
          iso3: "KAZ",
          ison: 398,
          languages: [
            {
              active: false,
              id: 134,
              iso2: "ru",
              name: null,
              native: null
            },
            {
              active: false,
              id: 80,
              iso2: "kk",
              name: null,
              native: null
            }
          ],
          name: "Kazakhstan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 74,
              iso3: "KES",
              ison: 404,
              minor: 2,
              name: "Kenyan Shilling"
            }
          ],
          id: 117,
          iso2: "KE",
          iso3: "KEN",
          ison: 404,
          languages: [
            {
              active: false,
              id: 154,
              iso2: "sw",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Kenya",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 78,
              iso3: "KPW",
              ison: 408,
              minor: 2,
              name: "North Korean Won"
            },
            {
              active: false,
              id: 79,
              iso3: "KRW",
              ison: 410,
              minor: 0,
              name: "Won"
            }
          ],
          id: 119,
          iso2: "KP",
          iso3: "PRK",
          ison: 408,
          languages: [
            {
              active: false,
              id: 84,
              iso2: "ko",
              name: null,
              native: null
            }
          ],
          name: "Korea (the Democratic People's Republic of)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 79,
              iso3: "KRW",
              ison: 410,
              minor: 0,
              name: "Won"
            }
          ],
          id: 120,
          iso2: "KR",
          iso3: "KOR",
          ison: 410,
          languages: [
            {
              active: false,
              id: 84,
              iso2: "ko",
              name: null,
              native: null
            }
          ],
          name: "Korea (the Republic of)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 80,
              iso3: "KWD",
              ison: 414,
              minor: 3,
              name: "Kuwaiti Dinar"
            }
          ],
          id: 121,
          iso2: "KW",
          iso3: "KWT",
          ison: 414,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Kuwait",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 75,
              iso3: "KGS",
              ison: 417,
              minor: 2,
              name: "Som"
            }
          ],
          id: 122,
          iso2: "KG",
          iso3: "KGZ",
          ison: 417,
          languages: [
            {
              active: false,
              id: 134,
              iso2: "ru",
              name: null,
              native: null
            },
            {
              active: false,
              id: 90,
              iso2: "ky",
              name: null,
              native: null
            }
          ],
          name: "Kyrgyzstan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 83,
              iso3: "LAK",
              ison: 418,
              minor: 2,
              name: "Lao Kip"
            }
          ],
          id: 123,
          iso2: "LA",
          iso3: "LAO",
          ison: 418,
          languages: [
            {
              active: false,
              id: 96,
              iso2: "lo",
              name: null,
              native: null
            }
          ],
          name: "Lao People's Democratic Republic (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 124,
          iso2: "LV",
          iso3: "LVA",
          ison: 428,
          languages: [
            {
              active: false,
              id: 98,
              iso2: "lv",
              name: null,
              native: null
            }
          ],
          name: "Latvia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 84,
              iso3: "LBP",
              ison: 422,
              minor: 2,
              name: "Lebanese Pound"
            }
          ],
          id: 125,
          iso2: "LB",
          iso3: "LBN",
          ison: 422,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Lebanon",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 164,
              iso3: "ZAR",
              ison: 710,
              minor: 2,
              name: "Rand"
            },
            {
              active: false,
              id: 87,
              iso3: "LSL",
              ison: 426,
              minor: 2,
              name: "Loti"
            }
          ],
          id: 126,
          iso2: "LS",
          iso3: "LSO",
          ison: 426,
          languages: [
            {
              active: false,
              id: 151,
              iso2: "st",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Lesotho",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 86,
              iso3: "LRD",
              ison: 430,
              minor: 2,
              name: "Liberian Dollar"
            }
          ],
          id: 127,
          iso2: "LR",
          iso3: "LBR",
          ison: 430,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Liberia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 88,
              iso3: "LYD",
              ison: 434,
              minor: 3,
              name: "Libyan Dinar"
            }
          ],
          id: 128,
          iso2: "LY",
          iso3: "LBY",
          ison: 434,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Libya",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 30,
              iso3: "CHF",
              ison: 756,
              minor: 2,
              name: "Swiss Franc"
            }
          ],
          id: 129,
          iso2: "LI",
          iso3: "LIE",
          ison: 438,
          languages: [
            {
              active: true,
              id: 32,
              iso2: "de",
              name: null,
              native: null
            }
          ],
          name: "Liechtenstein",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 130,
          iso2: "LT",
          iso3: "LTU",
          ison: 440,
          languages: [
            {
              active: false,
              id: 97,
              iso2: "lt",
              name: null,
              native: null
            }
          ],
          name: "Lithuania",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 95,
              iso3: "MOP",
              ison: 446,
              minor: 2,
              name: "Pataca"
            },
            {
              active: true,
              id: 49,
              iso3: "EUR",
              ison: 978,
              minor: 2,
              name: "Euro"
            }
          ],
          id: 131,
          iso2: "LU",
          iso3: "LUX",
          ison: 442,
          languages: [
            {
              active: false,
              id: 92,
              iso2: "lb",
              name: null,
              native: null
            },
            {
              active: true,
              id: 32,
              iso2: "de",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Luxembourg",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 95,
              iso3: "MOP",
              ison: 446,
              minor: 2,
              name: "Pataca"
            },
            {
              active: false,
              id: 92,
              iso3: "MKD",
              ison: 807,
              minor: 2,
              name: "Denar"
            }
          ],
          id: 132,
          iso2: "MO",
          iso3: "MAC",
          ison: 446,
          languages: [
            {
              active: false,
              id: 129,
              iso2: "pt",
              name: null,
              native: null
            },
            {
              active: false,
              id: 182,
              iso2: "zh",
              name: null,
              native: null
            }
          ],
          name: "Macao",
          sovereignty: {
            countries_count: 2,
            description: "China",
            id: 4,
            name: "CH"
          },
          sovereignty_id: 4
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 91,
              iso3: "MGA",
              ison: 969,
              minor: 2,
              name: "Malagasy Ariary"
            }
          ],
          id: 133,
          iso2: "MG",
          iso3: "MDG",
          ison: 450,
          languages: [
            {
              active: false,
              id: 99,
              iso2: "mg",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Madagascar",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 99,
              iso3: "MWK",
              ison: 454,
              minor: 2,
              name: "Malawi Kwacha"
            }
          ],
          id: 134,
          iso2: "MW",
          iso3: "MWI",
          ison: 454,
          languages: [
            {
              active: false,
              id: 119,
              iso2: "ny",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Malawi",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 102,
              iso3: "MYR",
              ison: 458,
              minor: 2,
              name: "Malaysian Ringgit"
            }
          ],
          id: 135,
          iso2: "MY",
          iso3: "MYS",
          ison: 458,
          languages: [
            {
              active: false,
              id: 107,
              iso2: "ms",
              name: null,
              native: null
            }
          ],
          name: "Malaysia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 98,
              iso3: "MVR",
              ison: 462,
              minor: 2,
              name: "Rufiyaa"
            }
          ],
          id: 136,
          iso2: "MV",
          iso3: "MDV",
          ison: 462,
          languages: [
            {
              active: false,
              id: 33,
              iso2: "dv",
              name: null,
              native: null
            }
          ],
          name: "Maldives",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 161,
              iso3: "XOF",
              ison: 952,
              minor: 0,
              name: "CFA Franc BCEAO"
            }
          ],
          id: 137,
          iso2: "ML",
          iso3: "MLI",
          ison: 466,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Mali",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 138,
          iso2: "MT",
          iso3: "MLT",
          ison: 470,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 108,
              iso2: "mt",
              name: null,
              native: null
            }
          ],
          name: "Malta",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 140,
          iso2: "MQ",
          iso3: "MTQ",
          ison: 474,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Martinique",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 96,
              iso3: "MRU",
              ison: 929,
              minor: 2,
              name: "Ouguiya"
            }
          ],
          id: 141,
          iso2: "MR",
          iso3: "MRT",
          ison: 478,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Mauritania",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 97,
              iso3: "MUR",
              ison: 480,
              minor: 2,
              name: "Mauritius Rupee"
            }
          ],
          id: 142,
          iso2: "MU",
          iso3: "MUS",
          ison: 480,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Mauritius",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 143,
          iso2: "YT",
          iso3: "MYT",
          ison: 175,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Mayotte",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 101,
              iso3: "MXV",
              ison: 979,
              minor: 2,
              name: "Mexican Unidad de Inversion (UDI)"
            },
            {
              active: false,
              id: 100,
              iso3: "MXN",
              ison: 484,
              minor: 2,
              name: "Mexican Peso"
            }
          ],
          id: 144,
          iso2: "MX",
          iso3: "MEX",
          ison: 484,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Mexico",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 145,
          iso2: "FM",
          iso3: "FSM",
          ison: 583,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Micronesia (Federated States of)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 90,
              iso3: "MDL",
              ison: 498,
              minor: 2,
              name: "Moldovan Leu"
            }
          ],
          id: 146,
          iso2: "MD",
          iso3: "MDA",
          ison: 498,
          languages: [
            {
              active: false,
              id: 133,
              iso2: "ro",
              name: null,
              native: null
            }
          ],
          name: "Moldova (the Republic of)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 147,
          iso2: "MC",
          iso3: "MCO",
          ison: 492,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Monaco",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 94,
              iso3: "MNT",
              ison: 496,
              minor: 2,
              name: "Tugrik"
            }
          ],
          id: 148,
          iso2: "MN",
          iso3: "MNG",
          ison: 496,
          languages: [
            {
              active: false,
              id: 104,
              iso2: "mn",
              name: null,
              native: null
            }
          ],
          name: "Mongolia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 149,
          iso2: "ME",
          iso3: "MNE",
          ison: 499,
          languages: [
            {
              active: false,
              id: 59,
              iso2: "hr",
              name: null,
              native: null
            },
            {
              active: false,
              id: 148,
              iso2: "sq",
              name: null,
              native: null
            },
            {
              active: false,
              id: 21,
              iso2: "bs",
              name: null,
              native: null
            },
            {
              active: false,
              id: 149,
              iso2: "sr",
              name: null,
              native: null
            }
          ],
          name: "Montenegro",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 160,
              iso3: "XCD",
              ison: 951,
              minor: 2,
              name: "East Caribbean Dollar"
            }
          ],
          id: 150,
          iso2: "MS",
          iso3: "MSR",
          ison: 500,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Montserrat",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 89,
              iso3: "MAD",
              ison: 504,
              minor: 2,
              name: "Moroccan Dirham"
            }
          ],
          id: 151,
          iso2: "MA",
          iso3: "MAR",
          ison: 504,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Morocco",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 103,
              iso3: "MZN",
              ison: 943,
              minor: 2,
              name: "Mozambique Metical"
            },
            {
              active: false,
              id: 93,
              iso3: "MMK",
              ison: 104,
              minor: 2,
              name: "Kyat"
            }
          ],
          id: 152,
          iso2: "MZ",
          iso3: "MOZ",
          ison: 508,
          languages: [
            {
              active: false,
              id: 129,
              iso2: "pt",
              name: null,
              native: null
            }
          ],
          name: "Mozambique",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 93,
              iso3: "MMK",
              ison: 104,
              minor: 2,
              name: "Kyat"
            }
          ],
          id: 153,
          iso2: "MM",
          iso3: "MMR",
          ison: 104,
          languages: [
            {
              active: false,
              id: 109,
              iso2: "my",
              name: null,
              native: null
            }
          ],
          name: "Myanmar",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 164,
              iso3: "ZAR",
              ison: 710,
              minor: 2,
              name: "Rand"
            },
            {
              active: false,
              id: 104,
              iso3: "NAD",
              ison: 516,
              minor: 2,
              name: "Namibia Dollar"
            }
          ],
          id: 154,
          iso2: "NA",
          iso3: "NAM",
          ison: 516,
          languages: [
            {
              active: false,
              id: 3,
              iso2: "af",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Namibia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 8,
              iso3: "AUD",
              ison: 36,
              minor: 2,
              name: "Australian Dollar"
            }
          ],
          id: 155,
          iso2: "NR",
          iso3: "NRU",
          ison: 520,
          languages: [
            {
              active: false,
              id: 110,
              iso2: "na",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Nauru",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 108,
              iso3: "NPR",
              ison: 524,
              minor: 2,
              name: "Nepalese Rupee"
            }
          ],
          id: 156,
          iso2: "NP",
          iso3: "NPL",
          ison: 524,
          languages: [
            {
              active: false,
              id: 112,
              iso2: "ne",
              name: null,
              native: null
            }
          ],
          name: "Nepal",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 162,
              iso3: "XPF",
              ison: 953,
              minor: 0,
              name: "CFP Franc"
            }
          ],
          id: 158,
          iso2: "NC",
          iso3: "NCL",
          ison: 540,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "New Caledonia",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 109,
              iso3: "NZD",
              ison: 554,
              minor: 2,
              name: "New Zealand Dollar"
            }
          ],
          id: 159,
          iso2: "NZ",
          iso3: "NZL",
          ison: 554,
          languages: [
            {
              active: false,
              id: 101,
              iso2: "mi",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "New Zealand",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 106,
              iso3: "NIO",
              ison: 558,
              minor: 2,
              name: "Cordoba Oro"
            }
          ],
          id: 160,
          iso2: "NI",
          iso3: "NIC",
          ison: 558,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Nicaragua",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 161,
              iso3: "XOF",
              ison: 952,
              minor: 0,
              name: "CFA Franc BCEAO"
            }
          ],
          id: 161,
          iso2: "NE",
          iso3: "NER",
          ison: 562,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Niger (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 105,
              iso3: "NGN",
              ison: 566,
              minor: 2,
              name: "Naira"
            }
          ],
          id: 162,
          iso2: "NG",
          iso3: "NGA",
          ison: 566,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Nigeria",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 109,
              iso3: "NZD",
              ison: 554,
              minor: 2,
              name: "New Zealand Dollar"
            }
          ],
          id: 163,
          iso2: "NU",
          iso3: "NIU",
          ison: 570,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Niue",
          sovereignty: {
            countries_count: 3,
            description: "New Zealand",
            id: 11,
            name: "NZ"
          },
          sovereignty_id: 11
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 8,
              iso3: "AUD",
              ison: 36,
              minor: 2,
              name: "Australian Dollar"
            }
          ],
          id: 164,
          iso2: "NF",
          iso3: "NFK",
          ison: 574,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Norfolk Island",
          sovereignty: {
            countries_count: 4,
            description: "Australia",
            id: 2,
            name: "AU"
          },
          sovereignty_id: 2
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 92,
              iso3: "MKD",
              ison: 807,
              minor: 2,
              name: "Denar"
            }
          ],
          id: 165,
          iso2: "MK",
          iso3: "MKD",
          ison: 807,
          languages: [
            {
              active: false,
              id: 102,
              iso2: "mk",
              name: null,
              native: null
            }
          ],
          name: "North Macedoni",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 107,
              iso3: "NOK",
              ison: 578,
              minor: 2,
              name: "Norwegian Krone"
            }
          ],
          id: 167,
          iso2: "NO",
          iso3: "NOR",
          ison: 578,
          languages: [
            {
              active: false,
              id: 115,
              iso2: "nn",
              name: null,
              native: null
            },
            {
              active: false,
              id: 116,
              iso2: "no",
              name: null,
              native: null
            }
          ],
          name: "Norway",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 110,
              iso3: "OMR",
              ison: 512,
              minor: 3,
              name: "Rial Omani"
            }
          ],
          id: 168,
          iso2: "OM",
          iso3: "OMN",
          ison: 512,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Oman",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 115,
              iso3: "PKR",
              ison: 586,
              minor: 2,
              name: "Pakistan Rupee"
            }
          ],
          id: 169,
          iso2: "PK",
          iso3: "PAK",
          ison: 586,
          languages: [
            {
              active: false,
              id: 171,
              iso2: "ur",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Pakistan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 170,
          iso2: "PW",
          iso3: "PLW",
          ison: 585,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Palau",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 66,
              iso3: "ILS",
              ison: 376,
              minor: 2,
              name: "New Israeli Sheqel"
            }
          ],
          id: 171,
          iso2: "PS",
          iso3: "PSE",
          ison: 275,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Palestine, State of",
          sovereignty: {
            countries_count: 2,
            description: "UN observer",
            id: 14,
            name: "UNO"
          },
          sovereignty_id: 14
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            },
            {
              active: false,
              id: 111,
              iso3: "PAB",
              ison: 590,
              minor: 2,
              name: "Balboa"
            }
          ],
          id: 172,
          iso2: "PA",
          iso3: "PAN",
          ison: 591,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Panama",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 113,
              iso3: "PGK",
              ison: 598,
              minor: 2,
              name: "Kina"
            }
          ],
          id: 173,
          iso2: "PG",
          iso3: "PNG",
          ison: 598,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Papua New Guinea",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 117,
              iso3: "PYG",
              ison: 600,
              minor: 0,
              name: "Guarani"
            }
          ],
          id: 174,
          iso2: "PY",
          iso3: "PRY",
          ison: 600,
          languages: [
            {
              active: false,
              id: 52,
              iso2: "gn",
              name: null,
              native: null
            },
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Paraguay",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 112,
              iso3: "PEN",
              ison: 604,
              minor: 2,
              name: "Sol"
            }
          ],
          id: 175,
          iso2: "PE",
          iso3: "PER",
          ison: 604,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Peru",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 114,
              iso3: "PHP",
              ison: 608,
              minor: 2,
              name: "Philippine Peso"
            },
            {
              active: false,
              id: 109,
              iso3: "NZD",
              ison: 554,
              minor: 2,
              name: "New Zealand Dollar"
            }
          ],
          id: 176,
          iso2: "PH",
          iso3: "PHL",
          ison: 608,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Philippines (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 109,
              iso3: "NZD",
              ison: 554,
              minor: 2,
              name: "New Zealand Dollar"
            }
          ],
          id: 177,
          iso2: "PN",
          iso3: "PCN",
          ison: 612,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Pitcair",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 116,
              iso3: "PLN",
              ison: 985,
              minor: 2,
              name: "Zloty"
            }
          ],
          id: 178,
          iso2: "PL",
          iso3: "POL",
          ison: 616,
          languages: [
            {
              active: false,
              id: 127,
              iso2: "pl",
              name: null,
              native: null
            }
          ],
          name: "Poland",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 179,
          iso2: "PT",
          iso3: "PRT",
          ison: 620,
          languages: [
            {
              active: false,
              id: 129,
              iso2: "pt",
              name: null,
              native: null
            }
          ],
          name: "Portugal",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 180,
          iso2: "PR",
          iso3: "PRI",
          ison: 630,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Puerto Rico",
          sovereignty: {
            countries_count: 6,
            description: "United States",
            id: 16,
            name: "US"
          },
          sovereignty_id: 16
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 118,
              iso3: "QAR",
              ison: 634,
              minor: 2,
              name: "Qatari Rial"
            }
          ],
          id: 181,
          iso2: "QA",
          iso3: "QAT",
          ison: 634,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Qatar",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 182,
          iso2: "RE",
          iso3: "REU",
          ison: 638,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Réunion",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 121,
              iso3: "RUB",
              ison: 643,
              minor: 2,
              name: "Russian Ruble"
            },
            {
              active: false,
              id: 119,
              iso3: "RON",
              ison: 946,
              minor: 2,
              name: "Romanian Leu"
            }
          ],
          id: 183,
          iso2: "RO",
          iso3: "ROU",
          ison: 642,
          languages: [
            {
              active: false,
              id: 133,
              iso2: "ro",
              name: null,
              native: null
            }
          ],
          name: "Romania",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 121,
              iso3: "RUB",
              ison: 643,
              minor: 2,
              name: "Russian Ruble"
            }
          ],
          id: 184,
          iso2: "RU",
          iso3: "RUS",
          ison: 643,
          languages: [
            {
              active: false,
              id: 134,
              iso2: "ru",
              name: null,
              native: null
            }
          ],
          name: "Russian Federation (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 122,
              iso3: "RWF",
              ison: 646,
              minor: 0,
              name: "Rwanda Franc"
            }
          ],
          id: 185,
          iso2: "RW",
          iso3: "RWA",
          ison: 646,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 135,
              iso2: "rw",
              name: null,
              native: null
            }
          ],
          name: "Rwanda",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 186,
          iso2: "BL",
          iso3: "BLM",
          ison: 652,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Saint Barthélemy",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 129,
              iso3: "SHP",
              ison: 654,
              minor: 2,
              name: "Saint Helena Pound"
            }
          ],
          id: 187,
          iso2: "SH",
          iso3: "SHN",
          ison: 654,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Saint Helena",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 160,
              iso3: "XCD",
              ison: 951,
              minor: 2,
              name: "East Caribbean Dollar"
            }
          ],
          id: 188,
          iso2: "KN",
          iso3: "KNA",
          ison: 659,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Saint Kitts and Nevis",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 160,
              iso3: "XCD",
              ison: 951,
              minor: 2,
              name: "East Caribbean Dollar"
            }
          ],
          id: 189,
          iso2: "LC",
          iso3: "LCA",
          ison: 662,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Saint Lucia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 190,
          iso2: "MF",
          iso3: "MAF",
          ison: 663,
          languages: [
            {
              active: false,
              id: 114,
              iso2: "nl",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Saint Martin (French part)",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
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
          id: 191,
          iso2: "PM",
          iso3: "SPM",
          ison: 666,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Saint Pierre and Miquelon",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 160,
              iso3: "XCD",
              ison: 951,
              minor: 2,
              name: "East Caribbean Dollar"
            }
          ],
          id: 192,
          iso2: "VC",
          iso3: "VCT",
          ison: 670,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Saint Vincent and the Grenadines",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 158,
              iso3: "WST",
              ison: 882,
              minor: 2,
              name: "Tala"
            }
          ],
          id: 193,
          iso2: "WS",
          iso3: "WSM",
          ison: 882,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 145,
              iso2: "sm",
              name: null,
              native: null
            }
          ],
          name: "Samoa",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 194,
          iso2: "SM",
          iso3: "SMR",
          ison: 674,
          languages: [
            {
              active: true,
              id: 72,
              iso2: "it",
              name: null,
              native: null
            }
          ],
          name: "San Marino",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 134,
              iso3: "STN",
              ison: 930,
              minor: 2,
              name: "Dobra"
            }
          ],
          id: 195,
          iso2: "ST",
          iso3: "STP",
          ison: 678,
          languages: [
            {
              active: false,
              id: 129,
              iso2: "pt",
              name: null,
              native: null
            }
          ],
          name: "Sao Tome and Principe",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 123,
              iso3: "SAR",
              ison: 682,
              minor: 2,
              name: "Saudi Riyal"
            }
          ],
          id: 196,
          iso2: "SA",
          iso3: "SAU",
          ison: 682,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Saudi Arabia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 161,
              iso3: "XOF",
              ison: 952,
              minor: 0,
              name: "CFA Franc BCEAO"
            }
          ],
          id: 197,
          iso2: "SN",
          iso3: "SEN",
          ison: 686,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Senegal",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 120,
              iso3: "RSD",
              ison: 941,
              minor: 2,
              name: "Serbian Dinar"
            }
          ],
          id: 198,
          iso2: "RS",
          iso3: "SRB",
          ison: 688,
          languages: [
            {
              active: false,
              id: 149,
              iso2: "sr",
              name: null,
              native: null
            }
          ],
          name: "Serbia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 125,
              iso3: "SCR",
              ison: 690,
              minor: 2,
              name: "Seychelles Rupee"
            }
          ],
          id: 199,
          iso2: "SC",
          iso3: "SYC",
          ison: 690,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Seychelles",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 130,
              iso3: "SLL",
              ison: 694,
              minor: 2,
              name: "Leone"
            }
          ],
          id: 200,
          iso2: "SL",
          iso3: "SLE",
          ison: 694,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Sierra Leone",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 128,
              iso3: "SGD",
              ison: 702,
              minor: 2,
              name: "Singapore Dollar"
            }
          ],
          id: 201,
          iso2: "SG",
          iso3: "SGP",
          ison: 702,
          languages: [
            {
              active: false,
              id: 182,
              iso2: "zh",
              name: null,
              native: null
            },
            {
              active: false,
              id: 155,
              iso2: "ta",
              name: null,
              native: null
            },
            {
              active: false,
              id: 107,
              iso2: "ms",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Singapore",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 5,
              iso3: "ANG",
              ison: 532,
              minor: 2,
              name: "Netherlands Antillean Guilder"
            }
          ],
          id: 202,
          iso2: "SX",
          iso3: "SXM",
          ison: 534,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 114,
              iso2: "nl",
              name: null,
              native: null
            }
          ],
          name: "Sint Maarten (Dutch part)",
          sovereignty: {
            countries_count: 4,
            description: "Netherlands",
            id: 10,
            name: "NL"
          },
          sovereignty_id: 10
        },
        {
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
          id: 203,
          iso2: "SK",
          iso3: "SVK",
          ison: 703,
          languages: [
            {
              active: false,
              id: 143,
              iso2: "sk",
              name: null,
              native: null
            }
          ],
          name: "Slovakia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
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
          id: 204,
          iso2: "SI",
          iso3: "SVN",
          ison: 705,
          languages: [
            {
              active: false,
              id: 144,
              iso2: "sl",
              name: null,
              native: null
            }
          ],
          name: "Slovenia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 124,
              iso3: "SBD",
              ison: 90,
              minor: 2,
              name: "Solomon Islands Dollar"
            }
          ],
          id: 205,
          iso2: "SB",
          iso3: "SLB",
          ison: 90,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Solomon Islands",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 131,
              iso3: "SOS",
              ison: 706,
              minor: 2,
              name: "Somali Shilling"
            }
          ],
          id: 206,
          iso2: "SO",
          iso3: "SOM",
          ison: 706,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            },
            {
              active: false,
              id: 147,
              iso2: "so",
              name: null,
              native: null
            }
          ],
          name: "Somalia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 164,
              iso3: "ZAR",
              ison: 710,
              minor: 2,
              name: "Rand"
            }
          ],
          id: 207,
          iso2: "ZA",
          iso3: "ZAF",
          ison: 710,
          languages: [
            {
              active: false,
              id: 183,
              iso2: "zu",
              name: null,
              native: null
            },
            {
              active: false,
              id: 178,
              iso2: "xh",
              name: null,
              native: null
            },
            {
              active: false,
              id: 173,
              iso2: "ve",
              name: null,
              native: null
            },
            {
              active: false,
              id: 165,
              iso2: "ts",
              name: null,
              native: null
            },
            {
              active: false,
              id: 162,
              iso2: "tn",
              name: null,
              native: null
            },
            {
              active: false,
              id: 150,
              iso2: "ss",
              name: null,
              native: null
            },
            {
              active: false,
              id: 151,
              iso2: "st",
              name: null,
              native: null
            },
            {
              active: false,
              id: 117,
              iso2: "nr",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 3,
              iso2: "af",
              name: null,
              native: null
            }
          ],
          name: "South Africa",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 133,
              iso3: "SSP",
              ison: 728,
              minor: 2,
              name: "South Sudanese Pound"
            }
          ],
          id: 209,
          iso2: "SS",
          iso3: "SSD",
          ison: 728,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "South Sudan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 85,
              iso3: "LKR",
              ison: 144,
              minor: 2,
              name: "Sri Lanka Rupee"
            }
          ],
          id: 211,
          iso2: "LK",
          iso3: "LKA",
          ison: 144,
          languages: [
            {
              active: false,
              id: 155,
              iso2: "ta",
              name: null,
              native: null
            },
            {
              active: false,
              id: 142,
              iso2: "si",
              name: null,
              native: null
            }
          ],
          name: "Sri Lanka",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 126,
              iso3: "SDG",
              ison: 938,
              minor: 2,
              name: "Sudanese Pound"
            }
          ],
          id: 212,
          iso2: "SD",
          iso3: "SDN",
          ison: 729,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Sudan (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 132,
              iso3: "SRD",
              ison: 968,
              minor: 2,
              name: "Surinam Dollar"
            }
          ],
          id: 213,
          iso2: "SR",
          iso3: "SUR",
          ison: 740,
          languages: [
            {
              active: false,
              id: 114,
              iso2: "nl",
              name: null,
              native: null
            }
          ],
          name: "Suriname",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 107,
              iso3: "NOK",
              ison: 578,
              minor: 2,
              name: "Norwegian Krone"
            }
          ],
          id: 214,
          iso2: "SJ",
          iso3: "SJM",
          ison: 744,
          languages: [
            {
              active: false,
              id: 116,
              iso2: "no",
              name: null,
              native: null
            }
          ],
          name: "Svalbard",
          sovereignty: {
            countries_count: 2,
            description: "Norway",
            id: 12,
            name: "NO"
          },
          sovereignty_id: 12
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 127,
              iso3: "SEK",
              ison: 752,
              minor: 2,
              name: "Swedish Krona"
            }
          ],
          id: 215,
          iso2: "SE",
          iso3: "SWE",
          ison: 752,
          languages: [
            {
              active: false,
              id: 153,
              iso2: "sv",
              name: null,
              native: null
            }
          ],
          name: "Sweden",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 136,
              iso3: "SYP",
              ison: 760,
              minor: 2,
              name: "Syrian Pound"
            },
            {
              active: false,
              id: 31,
              iso3: "CHW",
              ison: 948,
              minor: 2,
              name: "WIR Franc"
            },
            {
              active: false,
              id: 30,
              iso3: "CHF",
              ison: 756,
              minor: 2,
              name: "Swiss Franc"
            },
            {
              active: false,
              id: 29,
              iso3: "CHE",
              ison: 947,
              minor: 2,
              name: "WIR Euro"
            }
          ],
          id: 216,
          iso2: "CH",
          iso3: "CHE",
          ison: 756,
          languages: [
            {
              active: true,
              id: 72,
              iso2: "it",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: true,
              id: 32,
              iso2: "de",
              name: null,
              native: null
            }
          ],
          name: "Switzerland",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 136,
              iso3: "SYP",
              ison: 760,
              minor: 2,
              name: "Syrian Pound"
            },
            {
              active: false,
              id: 145,
              iso3: "TWD",
              ison: 901,
              minor: 2,
              name: "New Taiwan Dollar"
            }
          ],
          id: 217,
          iso2: "SY",
          iso3: "SYR",
          ison: 760,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Syrian Arab Republic (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 145,
              iso3: "TWD",
              ison: 901,
              minor: 2,
              name: "New Taiwan Dollar"
            }
          ],
          id: 218,
          iso2: "TW",
          iso3: "TWN",
          ison: 158,
          languages: [
            {
              active: false,
              id: 182,
              iso2: "zh",
              name: null,
              native: null
            }
          ],
          name: "Taiwan (Province of China)",
          sovereignty: {
            countries_count: 1,
            description: "dispute",
            id: 7,
            name: "D-Z"
          },
          sovereignty_id: 7
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 139,
              iso3: "TJS",
              ison: 972,
              minor: 2,
              name: "Somoni"
            }
          ],
          id: 219,
          iso2: "TJ",
          iso3: "TJK",
          ison: 762,
          languages: [
            {
              active: false,
              id: 134,
              iso2: "ru",
              name: null,
              native: null
            },
            {
              active: false,
              id: 157,
              iso2: "tg",
              name: null,
              native: null
            }
          ],
          name: "Tajikistan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 146,
              iso3: "TZS",
              ison: 834,
              minor: 2,
              name: "Tanzanian Shilling"
            }
          ],
          id: 220,
          iso2: "TZ",
          iso3: "TZA",
          ison: 834,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 154,
              iso2: "sw",
              name: null,
              native: null
            }
          ],
          name: "Tanzania, the United Republic of",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            },
            {
              active: false,
              id: 138,
              iso3: "THB",
              ison: 764,
              minor: 2,
              name: "Baht"
            }
          ],
          id: 221,
          iso2: "TH",
          iso3: "THA",
          ison: 764,
          languages: [
            {
              active: false,
              id: 158,
              iso2: "th",
              name: null,
              native: null
            }
          ],
          name: "Thailand",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 222,
          iso2: "TL",
          iso3: "TLS",
          ison: 626,
          languages: [
            {
              active: false,
              id: 129,
              iso2: "pt",
              name: null,
              native: null
            }
          ],
          name: "Timor-Leste",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 161,
              iso3: "XOF",
              ison: 952,
              minor: 0,
              name: "CFA Franc BCEAO"
            }
          ],
          id: 223,
          iso2: "TG",
          iso3: "TGO",
          ison: 768,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Togo",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 109,
              iso3: "NZD",
              ison: 554,
              minor: 2,
              name: "New Zealand Dollar"
            }
          ],
          id: 224,
          iso2: "TK",
          iso3: "TKL",
          ison: 772,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Tokelau",
          sovereignty: {
            countries_count: 3,
            description: "New Zealand",
            id: 11,
            name: "NZ"
          },
          sovereignty_id: 11
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 142,
              iso3: "TOP",
              ison: 776,
              minor: 2,
              name: "Pa\"anga"
            }
          ],
          id: 225,
          iso2: "TO",
          iso3: "TON",
          ison: 776,
          languages: [
            {
              active: false,
              id: 163,
              iso2: "to",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Tonga",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 144,
              iso3: "TTD",
              ison: 780,
              minor: 2,
              name: "Trinidad and Tobago Dollar"
            }
          ],
          id: 226,
          iso2: "TT",
          iso3: "TTO",
          ison: 780,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Trinidad and Tobago",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 141,
              iso3: "TND",
              ison: 788,
              minor: 3,
              name: "Tunisian Dinar"
            }
          ],
          id: 227,
          iso2: "TN",
          iso3: "TUN",
          ison: 788,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Tunisia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 143,
              iso3: "TRY",
              ison: 949,
              minor: 2,
              name: "Turkish Lira"
            }
          ],
          id: 228,
          iso2: "TR",
          iso3: "TUR",
          ison: 792,
          languages: [
            {
              active: false,
              id: 164,
              iso2: "tr",
              name: null,
              native: null
            }
          ],
          name: "Turkey",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 140,
              iso3: "TMT",
              ison: 934,
              minor: 2,
              name: "Turkmenistan New Manat"
            }
          ],
          id: 229,
          iso2: "TM",
          iso3: "TKM",
          ison: 795,
          languages: [
            {
              active: false,
              id: 134,
              iso2: "ru",
              name: null,
              native: null
            },
            {
              active: false,
              id: 160,
              iso2: "tk",
              name: null,
              native: null
            }
          ],
          name: "Turkmenistan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 230,
          iso2: "TC",
          iso3: "TCA",
          ison: 796,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Turks and Caicos Islands (the)",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 8,
              iso3: "AUD",
              ison: 36,
              minor: 2,
              name: "Australian Dollar"
            }
          ],
          id: 231,
          iso2: "TV",
          iso3: "TUV",
          ison: 798,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Tuvalu",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 148,
              iso3: "UGX",
              ison: 800,
              minor: 0,
              name: "Uganda Shilling"
            }
          ],
          id: 232,
          iso2: "UG",
          iso3: "UGA",
          ison: 800,
          languages: [
            {
              active: false,
              id: 154,
              iso2: "sw",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Uganda",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 147,
              iso3: "UAH",
              ison: 980,
              minor: 2,
              name: "Hryvnia"
            }
          ],
          id: 233,
          iso2: "UA",
          iso3: "UKR",
          ison: 804,
          languages: [
            {
              active: false,
              id: 170,
              iso2: "uk",
              name: null,
              native: null
            }
          ],
          name: "Ukraine",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 1,
              iso3: "AED",
              ison: 784,
              minor: 2,
              name: "UAE Dirham"
            }
          ],
          id: 234,
          iso2: "AE",
          iso3: "ARE",
          ison: 784,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "United Arab Emirates (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 236,
          iso2: "UM",
          iso3: "UM",
          ison: 581,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "United States Minor Outlying Islands (the)",
          sovereignty: {
            countries_count: 6,
            description: "United States",
            id: 16,
            name: "US"
          },
          sovereignty_id: 16
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 150,
              iso3: "USN",
              ison: 997,
              minor: 2,
              name: "US Dollar (Next day)"
            },
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 237,
          iso2: "US",
          iso3: "USA",
          ison: 840,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "United States of America (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 153,
              iso3: "UYW",
              ison: 927,
              minor: 4,
              name: "Unidad Previsional"
            },
            {
              active: false,
              id: 152,
              iso3: "UYU",
              ison: 858,
              minor: 2,
              name: "Peso Uruguayo"
            },
            {
              active: false,
              id: 151,
              iso3: "UYI",
              ison: 940,
              minor: 0,
              name: "Uruguay Peso en Unidades Indexadas (UI)"
            }
          ],
          id: 238,
          iso2: "UY",
          iso3: "URY",
          ison: 858,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Uruguay",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 154,
              iso3: "UZS",
              ison: 860,
              minor: 2,
              name: "Uzbekistan Sum"
            }
          ],
          id: 239,
          iso2: "UZ",
          iso3: "UZB",
          ison: 860,
          languages: [
            {
              active: false,
              id: 134,
              iso2: "ru",
              name: null,
              native: null
            },
            {
              active: false,
              id: 172,
              iso2: "uz",
              name: null,
              native: null
            }
          ],
          name: "Uzbekistan",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 157,
              iso3: "VUV",
              ison: 548,
              minor: 0,
              name: "Vatu"
            }
          ],
          id: 240,
          iso2: "VU",
          iso3: "VUT",
          ison: 548,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            },
            {
              active: false,
              id: 16,
              iso2: "bi",
              name: null,
              native: null
            }
          ],
          name: "Vanuatu",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 156,
              iso3: "VND",
              ison: 704,
              minor: 0,
              name: "Dong"
            },
            {
              active: false,
              id: 155,
              iso3: "VES",
              ison: 928,
              minor: 2,
              name: "Bolívar Soberano"
            }
          ],
          id: 241,
          iso2: "VE",
          iso3: "VEN",
          ison: 862,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Venezuela (Bolivarian Republic of)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 156,
              iso3: "VND",
              ison: 704,
              minor: 0,
              name: "Dong"
            },
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 242,
          iso2: "VN",
          iso3: "VNM",
          ison: 704,
          languages: [
            {
              active: false,
              id: 174,
              iso2: "vi",
              name: null,
              native: null
            }
          ],
          name: "Viet Nam",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 243,
          iso2: "VG",
          iso3: "VGB",
          ison: 92,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Virgin Islands (British)",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 162,
              iso3: "XPF",
              ison: 953,
              minor: 0,
              name: "CFP Franc"
            },
            {
              active: false,
              id: 89,
              iso3: "MAD",
              ison: 504,
              minor: 2,
              name: "Moroccan Dirham"
            }
          ],
          id: 245,
          iso2: "WF",
          iso3: "WLF",
          ison: 876,
          languages: [
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Wallis and Futuna",
          sovereignty: {
            countries_count: 12,
            description: "France",
            id: 9,
            name: "FR"
          },
          sovereignty_id: 9
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 96,
              iso3: "MRU",
              ison: 929,
              minor: 2,
              name: "Ouguiya"
            },
            {
              active: false,
              id: 45,
              iso3: "DZD",
              ison: 12,
              minor: 2,
              name: "Algerian Dinar"
            },
            {
              active: false,
              id: 89,
              iso3: "MAD",
              ison: 504,
              minor: 2,
              name: "Moroccan Dirham"
            }
          ],
          id: 246,
          iso2: "EH",
          iso3: "ESH",
          ison: 732,
          languages: [
            {
              active: true,
              id: 39,
              iso2: "es",
              name: null,
              native: null
            }
          ],
          name: "Western Sahara",
          sovereignty: {
            countries_count: 1,
            description: "disputed",
            id: 6,
            name: "D-AI"
          },
          sovereignty_id: 6
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 163,
              iso3: "YER",
              ison: 886,
              minor: 2,
              name: "Yemeni Rial"
            }
          ],
          id: 247,
          iso2: "YE",
          iso3: "YEM",
          ison: 887,
          languages: [
            {
              active: false,
              id: 7,
              iso2: "ar",
              name: null,
              native: null
            }
          ],
          name: "Yemen",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 165,
              iso3: "ZMW",
              ison: 967,
              minor: 2,
              name: "Zambian Kwacha"
            }
          ],
          id: 248,
          iso2: "ZM",
          iso3: "ZMB",
          ison: 894,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Zambia",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 73,
              iso3: "JPY",
              ison: 392,
              minor: 0,
              name: "Yen"
            },
            {
              active: false,
              id: 67,
              iso3: "INR",
              ison: 356,
              minor: 2,
              name: "Indian Rupee"
            },
            {
              active: false,
              id: 34,
              iso3: "CNY",
              ison: 156,
              minor: 2,
              name: "Yuan Renminbi"
            },
            {
              active: false,
              id: 8,
              iso3: "AUD",
              ison: 36,
              minor: 2,
              name: "Australian Dollar"
            },
            {
              active: false,
              id: 52,
              iso3: "GBP",
              ison: 826,
              minor: 2,
              name: "Pound Sterling"
            },
            {
              active: false,
              id: 24,
              iso3: "BWP",
              ison: 72,
              minor: 2,
              name: "Pula"
            },
            {
              active: false,
              id: 164,
              iso3: "ZAR",
              ison: 710,
              minor: 2,
              name: "Rand"
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
              active: false,
              id: 166,
              iso3: "ZWL",
              ison: 932,
              minor: 2,
              name: "Zimbabwe Dollar"
            }
          ],
          id: 249,
          iso2: "ZW",
          iso3: "ZWE",
          ison: 716,
          languages: [
            {
              active: false,
              id: 111,
              iso2: "nd",
              name: null,
              native: null
            },
            {
              active: false,
              id: 146,
              iso2: "sn",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Zimbabwe",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 43,
              iso3: "DKK",
              ison: 208,
              minor: 2,
              name: "Danish Krone"
            }
          ],
          id: 61,
          iso2: "DK",
          iso3: "DNK",
          ison: 208,
          languages: [
            {
              active: false,
              id: 31,
              iso2: "da",
              name: null,
              native: null
            }
          ],
          name: "Denmark",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 57,
              iso3: "GNF",
              ison: 324,
              minor: 0,
              name: "Guinean Franc"
            }
          ],
          id: 94,
          iso2: "GN",
          iso3: "GIN",
          ison: 324,
          languages: [
            {
              active: false,
              id: 43,
              iso2: "ff",
              name: null,
              native: null
            },
            {
              active: true,
              id: 47,
              iso2: "fr",
              name: null,
              native: null
            }
          ],
          name: "Guinea",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 8,
              iso3: "AUD",
              ison: 36,
              minor: 2,
              name: "Australian Dollar"
            }
          ],
          id: 118,
          iso2: "KI",
          iso3: "KIR",
          ison: 296,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Kiribati",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 139,
          iso2: "MH",
          iso3: "MHL",
          ison: 584,
          languages: [
            {
              active: false,
              id: 100,
              iso2: "mh",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Marshall Islands (the)",
          sovereignty: {
            countries_count: 193,
            description: "UN member state",
            id: 13,
            name: "UN"
          },
          sovereignty_id: 13
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 166,
          iso2: "MP",
          iso3: "MNP",
          ison: 580,
          languages: [
            {
              active: false,
              id: 24,
              iso2: "ch",
              name: null,
              native: null
            },
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Northern Mariana Islands (the)",
          sovereignty: {
            countries_count: 6,
            description: "United States",
            id: 16,
            name: "US"
          },
          sovereignty_id: 16
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: false,
              id: 52,
              iso3: "GBP",
              ison: 826,
              minor: 2,
              name: "Pound Sterling"
            }
          ],
          id: 208,
          iso2: "GS",
          iso3: "SGS",
          ison: 239,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "South Georgia and the South Sandwich Islands",
          sovereignty: {
            countries_count: 12,
            description: "United Kingdom",
            id: 15,
            name: "UK"
          },
          sovereignty_id: 15
        },
        {
          active: true,
          continent: null,
          continent_id: null,
          currencies: [
            {
              active: true,
              id: 149,
              iso3: "USD",
              ison: 840,
              minor: 2,
              name: "US Dollar"
            }
          ],
          id: 244,
          iso2: "VI",
          iso3: "VIR",
          ison: 850,
          languages: [
            {
              active: true,
              id: 37,
              iso2: "en",
              name: null,
              native: null
            }
          ],
          name: "Virgin Islands (U.S.)",
          sovereignty: {
            countries_count: 6,
            description: "United States",
            id: 16,
            name: "US"
          },
          sovereignty_id: 16
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
