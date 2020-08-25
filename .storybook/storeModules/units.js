import getters from '@/store/units/getters'
import mutations from '@/store/units/mutations'
import state from '@/store/units/state'

const moduleUnits = {
  namespaced: true,
  actions: {
    get({ commit }) {
      const data = [
        {
          base: "year",
          default: true,
          dimension: "age",
          id: 1,
          symbole: "year",
          unit_per_base: 1
        },
        {
          base: "Gb/s",
          default: true,
          dimension: "bandwith",
          id: 2,
          symbole: "Gb/s",
          unit_per_base: 1000000000
        },
        {
          base: "byte",
          default: true,
          dimension: "data",
          id: 3,
          symbole: "byte",
          unit_per_base: 1
        },
        {
          base: "hr",
          default: true,
          dimension: "duration",
          id: 4,
          symbole: "hr",
          unit_per_base: 1
        },
        {
          base: "m",
          default: true,
          dimension: "length",
          id: 5,
          symbole: "m",
          unit_per_base: 1
        },
        {
          base: "km/hr",
          default: true,
          dimension: "speed",
          id: 6,
          symbole: "km/hr",
          unit_per_base: 1
        },
        {
          base: "Unit",
          default: true,
          dimension: "unit",
          id: 7,
          symbole: "Unit",
          unit_per_base: 1
        },
        {
          base: "l",
          default: true,
          dimension: "volume",
          id: 8,
          symbole: "l",
          unit_per_base: 1
        },
        {
          base: "kg",
          default: true,
          dimension: "weight",
          id: 9,
          symbole: "kg",
          unit_per_base: 1
        },
        {
          base: "work",
          default: true,
          dimension: "word",
          id: 10,
          symbole: "work",
          unit_per_base: 1
        },
        {
          base: "year",
          default: false,
          dimension: "age",
          id: 11,
          symbole: "month",
          unit_per_base: 12
        },
        {
          base: "Gb/s",
          default: false,
          dimension: "bandwith",
          id: 12,
          symbole: "bit/s",
          unit_per_base: 0.125
        },
        {
          base: "Gb/s",
          default: false,
          dimension: "bandwith",
          id: 13,
          symbole: "byte/s",
          unit_per_base: 1
        },
        {
          base: "Gb/s",
          default: false,
          dimension: "bandwith",
          id: 14,
          symbole: "kb/s",
          unit_per_base: 1000
        },
        {
          base: "Gb/s",
          default: false,
          dimension: "bandwith",
          id: 15,
          symbole: "Mb/s",
          unit_per_base: 1000000
        },
        {
          base: "Gb/s",
          default: false,
          dimension: "bandwith",
          id: 16,
          symbole: "Tb/s",
          unit_per_base: 1000000000000
        },
        {
          base: "byte",
          default: false,
          dimension: "data",
          id: 17,
          symbole: "bit",
          unit_per_base: 0.125
        },
        {
          base: "byte",
          default: false,
          dimension: "data",
          id: 18,
          symbole: "GB",
          unit_per_base: 1000000000
        },
        {
          base: "byte",
          default: false,
          dimension: "data",
          id: 19,
          symbole: "kB",
          unit_per_base: 1000
        },
        {
          base: "byte",
          default: false,
          dimension: "data",
          id: 20,
          symbole: "MB",
          unit_per_base: 1000000
        },
        {
          base: "byte",
          default: false,
          dimension: "data",
          id: 21,
          symbole: "TB",
          unit_per_base: 1000000000000
        },
        {
          base: "hr",
          default: false,
          dimension: "duration",
          id: 22,
          symbole: "day",
          unit_per_base: 24
        },
        {
          base: "hr",
          default: false,
          dimension: "duration",
          id: 23,
          symbole: "min",
          unit_per_base: 0.0166666666666667
        },
        {
          base: "hr",
          default: false,
          dimension: "duration",
          id: 24,
          symbole: "month",
          unit_per_base: 730.5
        },
        {
          base: "hr",
          default: false,
          dimension: "duration",
          id: 25,
          symbole: "quarter",
          unit_per_base: 2191.5
        },
        {
          base: "hr",
          default: false,
          dimension: "duration",
          id: 26,
          symbole: "sec",
          unit_per_base: 0.000277777777777778
        },
        {
          base: "hr",
          default: false,
          dimension: "duration",
          id: 27,
          symbole: "week",
          unit_per_base: 168
        },
        {
          base: "hr",
          default: false,
          dimension: "duration",
          id: 28,
          symbole: "year",
          unit_per_base: 8766
        },
        {
          base: "m",
          default: false,
          dimension: "length",
          id: 29,
          symbole: "cm",
          unit_per_base: 0.100000001490116
        },
        {
          base: "m",
          default: false,
          dimension: "length",
          id: 30,
          symbole: "foot",
          unit_per_base: 0.304800003767014
        },
        {
          base: "m",
          default: false,
          dimension: "length",
          id: 31,
          symbole: "inch",
          unit_per_base: 0.0254
        },
        {
          base: "m",
          default: false,
          dimension: "length",
          id: 32,
          symbole: "km",
          unit_per_base: 1000
        },
        {
          base: "m",
          default: false,
          dimension: "length",
          id: 33,
          symbole: "mile",
          unit_per_base: 1609.344
        },
        {
          base: "m",
          default: false,
          dimension: "length",
          id: 34,
          symbole: "mm",
          unit_per_base: 0.00100000004749745
        },
        {
          base: "m",
          default: false,
          dimension: "length",
          id: 35,
          symbole: "nautical mile",
          unit_per_base: 1852
        },
        {
          base: "m",
          default: false,
          dimension: "length",
          id: 36,
          symbole: "yard",
          unit_per_base: 0.914399981498718
        },
        {
          base: "m",
          default: false,
          dimension: "number",
          id: 37,
          symbole: "Nr",
          unit_per_base: 1
        },
        {
          base: "km/hr",
          default: false,
          dimension: "speed",
          id: 38,
          symbole: "m/s",
          unit_per_base: 3.59999990463257
        },
        {
          base: "km/hr",
          default: false,
          dimension: "speed",
          id: 39,
          symbole: "mile/hr",
          unit_per_base: 1.609344
        },
        {
          base: "Unit",
          default: false,
          dimension: "unit",
          id: 40,
          symbole: "dozen",
          unit_per_base: 0.0833333333333333
        },
        {
          base: "Unit",
          default: false,
          dimension: "unit",
          id: 41,
          symbole: "tens",
          unit_per_base: 0.1
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 42,
          symbole: "barrel",
          unit_per_base: 158.987289428711
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 43,
          symbole: "cl",
          unit_per_base: 0.00999999977648258
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 44,
          symbole: "dl",
          unit_per_base: 0.100000001490116
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 45,
          symbole: "fl oz (UK)",
          unit_per_base: 0.028413062915206
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 46,
          symbole: "fl oz (US)",
          unit_per_base: 0.029573529958725
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 47,
          symbole: "ft³",
          unit_per_base: 28.3168468475342
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 48,
          symbole: "gal (UK)",
          unit_per_base: 4.5460901260376
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 49,
          symbole: "gal (US)",
          unit_per_base: 3.7854118347168
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 50,
          symbole: "inch³",
          unit_per_base: 0.0163870640099049
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 51,
          symbole: "m³",
          unit_per_base: 1000
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 52,
          symbole: "ml",
          unit_per_base: 0.00100000004749745
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 53,
          symbole: "pint (UK)",
          unit_per_base: 0.5682612657547
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 54,
          symbole: "pint (US dry)",
          unit_per_base: 0.4731764793396
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 55,
          symbole: "pint (US liquid)",
          unit_per_base: 0.550610482692719
        },
        {
          base: "l",
          default: false,
          dimension: "volume",
          id: 56,
          symbole: "yard³",
          unit_per_base: 764.554870605469
        },
        {
          base: "kg",
          default: false,
          dimension: "weight",
          id: 57,
          symbole: "g",
          unit_per_base: 0.001
        },
        {
          base: "kg",
          default: false,
          dimension: "weight",
          id: 58,
          symbole: "mg",
          unit_per_base: 0.000001
        },
        {
          base: "kg",
          default: false,
          dimension: "weight",
          id: 59,
          symbole: "t",
          unit_per_base: 1000
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
export default moduleUnits
